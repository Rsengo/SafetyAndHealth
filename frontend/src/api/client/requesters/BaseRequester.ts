import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, } from 'axios';
import RequestConfigBuilder from '../builders/RequestConfigBuilder';
import buildFormData from '../builders/buildFormData';

abstract class BaseRequester {
    private readonly _client: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this._client = Axios.create(config);
    }

    protected async _get<TResponse = unknown>(url: string): Promise<TResponse> {
        const response: AxiosResponse<TResponse> = await this._client.get<TResponse>(url);
        return this._processResponse(response);
    }

    protected async _post<TResponse = unknown>(url: string, data?: any): Promise<TResponse> {
        const response: AxiosResponse<TResponse> = await this._client.post<TResponse>(url, data);
        return this._processResponse(response);
    }

    protected async _postForm<TResponse = unknown>(url: string, data?: any): Promise<TResponse> {
        const configBuilder: RequestConfigBuilder = new RequestConfigBuilder();
        const config: AxiosRequestConfig = configBuilder
            .addFormHeaders()
            .build();
        const formData: FormData | undefined = buildFormData(data);
        const response: AxiosResponse<TResponse> = await this._client.post<TResponse>(url, formData, config);
        return this._processResponse(response);
    }

    protected async _put<TResponse = unknown>(url: string, data?: any): Promise<TResponse> {
        const response: AxiosResponse<TResponse> = await this._client.put<TResponse>(url, data);
        return this._processResponse(response);
    }

    protected async _delete<TResponse = unknown>(url: string, config?: AxiosRequestConfig): Promise<TResponse> {
        const response: AxiosResponse<TResponse> = await this._client.delete<TResponse>(url, config);
        return this._processResponse(response);
    }

    protected _download(url: string): void {
        window.open(url);
    }

    private _processResponse<TData>(response: AxiosResponse<TData>): TData {
        //TODO process status
        //TODO use Transformer
        return response.data;
    }
}

export default BaseRequester;