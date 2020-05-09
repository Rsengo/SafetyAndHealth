import { AxiosRequestConfig } from 'axios';
import BaseRequester from './BaseRequester';
import ApiConstants from '../../../constants/ApiConstants.json';
import { CertificateCreateUpdateDto, CertificateDto } from '../../models/Certificate';

class CertificateRequester extends BaseRequester {
    constructor(config: AxiosRequestConfig) {
        super(config);
    }

    getAll(): Promise<CertificateDto[]> {
        return this._get<CertificateDto[]>(ApiConstants.routes.certificate.getAll);
    }

    create(certificate: CertificateCreateUpdateDto): Promise<CertificateDto> {
        return this._post(ApiConstants.routes.certificate.create, certificate);
    }

    update(certificate: CertificateCreateUpdateDto): Promise<CertificateDto> {
        return this._put(ApiConstants.routes.certificate.create, certificate);
    }

    delete(certificateId: number): Promise<void> {
        return this._delete(`${ApiConstants.routes.certificate.delete}/${certificateId}`);
    }
}

export default CertificateRequester;