// import ProductModel from "../schema/Product.model";
import {Product, ProductInput, ProductInquiry, ProductUpdateInput} from "../libs/types/product";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { shapeIntMongooseObjectId } from "../libs/config";
import ProductModel from "../schema/Product.model";
import { ProductStatus } from "../libs/enums/product.enum";
import { T } from "../libs/types/common";
import { ObjectId } from 'mongoose';
import ViewService from './View.service';
import { ViewInput } from "../libs/types/view";
import { ViewGroup } from "../libs/enums/view.enum";

class ProductService {
   private readonly productModel;
    ViewService: ViewService;

    constructor() {
        this.productModel = ProductModel;
        this.ViewService = new ViewService();
    
    }

    //SPA

    public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
        const match: T = { productStatus: ProductStatus.PROCESS};
        
        if(inquiry.productCollection)
            match.ProductCollection = inquiry.productCollection;
        if(inquiry.search) {
            match.productName = {$regex:
                new RegExp(inquiry.search, "i")
            }
        }
        
        const sort: T = 
        inquiry.order === "productPrice" 
        ? {[inquiry.order] : 1}
        : {[inquiry.order] : -1};

        const result = await this.productModel
        .agregate([
            {$match: match},
            {$sort: sort},
            {$skip: (inquiry.page * 1 -1) * inquiry.limit }, 
            {$limit: inquiry.limit * 1},
        ])
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result;
    }

    public async getProduct(memberId: ObjectId | null, id: string): Promise<Product> {
        const productId = shapeIntMongooseObjectId(id);

        let result = await this.productModel
        .findOne({_id: productId,
            ProductStatus: ProductStatus.PROCESS,
        })
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        if (memberId) {
            //check view log existence
            const input: ViewInput = {
                memberId: memberId,
                viewRefId: productId,
                viewGroup: ViewGroup.PRODUCT,
            };

            const existView = await this.ViewService.checkViewExistence(input);
            
            console.log("existView", existView);
            if(!existView) {
                //insert new view log
                await this.ViewService.insertMemberView(input);

             //increse counts
             const result2 = await this.productModel
             .findOneAndUpdate(
                productId,
                {$inc: { productViews: +1}},
                {new: true}
             )
             .exec();

            }

        }


        return result;
    }

    //SSR

public async getAllProducts(): Promise<Product[]> { //product of array - array ni ichida productlani qaytarish kerak
  const result = await this.productModel
  .find()  //products collectionda mavjud bolgan dakumentlani alish uchun
  .exec();
  if(!result) throw new Errors(HttpCode.NOT_FOUND,
     Message.NO_DATA_FOUND);

 return result;
}


public async createNewProduct(input: ProductInput): Promise<Product> {
     try {
        return await this.productModel.create(input);
    } catch (err) {
     console.error("Error,model:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
  }
}

 public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
 ): Promise<Product> {
  id = shapeIntMongooseObjectId(id);
  const result = await this.productModel
  .findOneAndUpdate({ _id: id}, input,{new: true } )
  .exec();
  if(!result) throw new Errors(HttpCode.BAD_REQUEST,
     Message.UPDATE_FAILED);

 return result;
}
}

export default ProductService;