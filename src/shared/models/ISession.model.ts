import { IToken } from "./IToken.model";
import { IUserSession } from "./IUserSession.model";

export interface ISession {
    user: IUserSession;
    token: IToken;
}