import express, {Request, Response} from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
// default chaqirilganda yaxlit chaqiriladi
import uploader from "./libs/utils/uploader"
import productController from './controllers/product.controller';

/** Member */
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", memberController.login);

router.post("/member/signup", memberController.signup);

router.post("/member/logout", 
    memberController.verifyAuth,
    memberController.logout,
)

router.get("/member/detail", memberController.verifyAuth);
router.get("/member/detail", 
    memberController.verifyAuth,
    memberController.getMemberDetail,
);

router.post("/member/update", 
    memberController.verifyAuth, //auth tekshirish
uploader("members")
.single("memberImage"), //multer orqali rasm qabul qib serverga yuklash
memberController.updateMember);

router.get("/member/top-users",
    memberController.getTopUsers
);

/** Product */

router.get("/product/all/:id", productController.getProducts);
router.get("/product/:id", memberController.retriveAuth, productController.getProduct);

/** Order */



export default router;