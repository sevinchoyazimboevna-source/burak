export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "SOMETHING WENT WRONG!",
    NO_DATA_FOUND = "NO DATA IS FOUND",
    CREATE_FAILED = "CREATE IS FAILED",
    UPDATE_FAILED = "UPDATE IS FAILED",

    
    NO_MEMBER_NICK = "NO MEMBER WITH THAT NICK!",
    NO_NICK_PHONE =  "YOU ARE INSERTING ALREADY USED NICK OR PHONE!",
    WRONG_PASSWORD = "WRONG PASSWORD!",
    NOT_AUTHENTICATED = "YOU ARE NOT AUTHENTICATED, PLEASE LOGIN FIRST!"
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    static standart = {
        code: HttpCode.INTERNAL_SERVER_ERROR,
        message: Message.SOMETHING_WENT_WRONG,
    };

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}

export default Errors;