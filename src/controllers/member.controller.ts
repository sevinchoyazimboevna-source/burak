import {Request, Response }  from 'express';
import {T} from "../libs/types/common";
import MemberService from '../models/Member.service';
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import Errors from '../libs/Errors';
import AuthService from '../models/Auth.service';

// SPA - REACT   //tokken
const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        const input: MemberInput = req.body,
        result: Member = await memberService.signup(input),
        token = await authService.createToken(result);

        // TODO: TOKENS
        
        res.json({ member: result })
    } catch (err) {
        console.log("ERROR, signup:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
        // res.json({})
    }
    
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login");
        const input: LoginInput = req.body,
        result = await memberService.login(input),
        token = await authService.createToken(result); //inson oqib bilmiydigan string hosil qiladi
        
        res.json({ member: result})
    } catch (err) {
        console.log("ERROR, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart);
        // res.json({});
    }

};



export default memberController;