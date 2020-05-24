import { AxiosRequestConfig } from 'axios';
import CertificateRequester from './requesters/CertificateRequester';
import DocumentTemplateRequester from './requesters/DocumentTemplateRequester';
import PositionRequester from './requesters/PositionRequester';
import UserCertificateRequester from './requesters/UserCertificateRequester';
import UserProtocolRequester from './requesters/UserProtocolRequester';
import UserRequester from './requesters/UserRequester';
import ApiClientConfig from './ApiClientConfig';
import CertificatesTableRequester from './requesters/CertificatesTableRequester';

class ApiClient {
    public readonly certificate: CertificateRequester;

    public readonly certificatesTable: CertificatesTableRequester;

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
        this.certificatesTable = new CertificatesTableRequester(requestConfig);
        this.documentTemplate = new DocumentTemplateRequester(requestConfig);
        this.position = new PositionRequester(requestConfig);
        this.userCertificate = new UserCertificateRequester(requestConfig);
        this.userProtocol = new UserProtocolRequester(requestConfig);
        this.user = new UserRequester(requestConfig);
    }
}

export default ApiClient;