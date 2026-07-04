import Errors, { HttpCode, Message } from "../libs/Errors";
import { resolve } from "node:dns";
import { Member } from "../libs/types/member";
import { rejects } from "node:assert";
import jwt from "jsonwebtoken"
import { AUTH_TIMER } from './../libs/config';

class AuthService {
    constructor() {}

    public createToken(payload: Member) {
        return new Promise((resolve, reject) => {
            const duration = `${AUTH_TIMER}h`;
            jwt.sign(payload, process.env.SECRET_TOKEN as string, 
                { expiresIn: duration }, (err, token) => {
                if (err) reject(new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED));
                else resolve(token as string);
            });
        });
    }
}

export default AuthService;