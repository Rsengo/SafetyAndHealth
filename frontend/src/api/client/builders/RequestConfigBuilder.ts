import { AxiosRequestConfig } from 'axios';
import ApiConstants from '../../../constants/ApiConstants.json';

class RequestConfigBuilder {
    private _headers: any;

    constructor() {
        this._headers = {};
    }

    addFormHeaders(): RequestConfigBuilder {
        this._headers = { 
            ...this._headers, 
            ...ApiConstants.formHeaders 
        };

        return this;
    }

    build(): AxiosRequestConfig {
        return {
            headers: { 
                ...this._headers 
            }
        };
    }
}

export default RequestConfigBuilder;