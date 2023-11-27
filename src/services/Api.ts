import axios, { AxiosInstance } from "axios";
import { API_URL } from "./urls";

/**
 * The API server. 
 */
export default class Api {

    client: AxiosInstance | null = null;

    /**
     * Initializes the API class.
     * @returns {AxiosInstance} an axios instance object.
     */
    init(): AxiosInstance {

        let headers = {
            Accept: 'application/json'
        }

        this.client = axios.create({
            baseURL: API_URL,
            headers
        });

        return this.client;
    }
}