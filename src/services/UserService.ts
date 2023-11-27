import { AxiosResponse } from "axios";
import Api from "./Api";
import { ISessionResponse } from "../shared/models/ISessionResponse.model";
import { userEndpoints } from "./urls";
import { IUserPayload } from "../shared/models/payloads/ILoginPayload.model";

/**
 * Represents the services of the User entity.
 */
export default class UserService {

    api = new Api().init();

    /**
     * Logs the user in.
     * @returns {Promise<AxiosResponse<ISessionResponse>>} - the Session object containing user and token.
     */
    login(userLogin: IUserPayload): Promise<AxiosResponse<ISessionResponse>> {
        return this.api.post<ISessionResponse>(`${userEndpoints.LOGIN}`);
    }
}