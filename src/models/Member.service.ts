import MemberModel from "../schema/Member.model";
import {  LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, {HttpCode, Message} from "../libs/Errors"
import {MemberType} from "../libs/enums/member.enum"
// import { Member } from './../libs/types/member';

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> { //promise faqat asyncrnsda
        // const result = await this.memberModel.create(input);
        const exist = await this.memberModel
        .findOne({memberType: MemberType.RESTAURANT})
        .exec();

        if(exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        try {
        const tempResult = new this.memberModel(input);
        const result = await tempResult.save();
        result.memberPassword = "";
        return result;
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }

    }
    public async processLogin(input: LoginInput): Promise<Member> {
      const member = await this.memberModel
      .findOne({memberNick: input.memberNick},
      { memberNick: 1, memberPassword: 1})
      .exec();
     if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK)
      
     const isMatch = input.memberPassword === member.memberPassword;
     console.log("isMAtch", isMatch);

     if(!isMatch) {
        throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
     }

    return await this.memberModel.findById(member._id).exec();
    }
}

export default MemberService;