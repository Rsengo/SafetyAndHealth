import { AxiosRequestConfig } from 'axios';
import CertificateRequester from './requesters/CertificateRequester';
import DocumentTemplateRequester from './requesters/DocumentTemplateRequester';
import PositionRequester from './requesters/PositionRequester';
import UserCertificateRequester from './requesters/UserCertificateRequester';
import UserProtocolRequester from './requesters/UserProtocolRequester';
import UserRequester from './requesters/UserRequester';
import ApiClientConfig from './ApiClientConfig';

class ApiClient {
    public readonly certificate: CertificateRequester;

    public readonly documentTemplate: DocumentTemplateRequester;

    public readonly position: PositionRequester;

    public readonly userCertificate: UserCertificateRequester;

    public readonly userProtocol: UserProtocolRequester;

    public readonly user: UserRequester;

    constructor(config: ApiClientConfig) {
        const requestConfig: AxiosRequestConfig = {
            baseURL: config.baseURL
        };

        this.certificate = new CertificateRequester(requestConfig);
        this.documentTemplate = new DocumentTemplateRequester(requestConfig);
        this.position = new PositionRequester(requestConfig);
        this.userCertificate = new UserCertificateRequester(requestConfig);
        this.userProtocol = new UserProtocolRequester(requestConfig);
        this.user = new UserRequester(requestConfig);
    }
}

export default ApiClient;