import * as types from './types';
import { CertificateDto, CertificateCreateUpdateDto } from '../../api/models/Certificate';

export const loadCertificates = (): types.LoadCertificatesAction => ({
    type: types.LOAD_CERTIFICATES,
    payload: null
});

export const loadCertificatesSuccess = (certificates: CertificateDto[]): types.LoadCertificatesSuccessAction => ({
    type: types.LOAD_CERTIFICATES_SUCCESS,
    payload: certificates
});

export const loadCertificatesError = (): types.LoadCertificatesErrorAction => ({
    type: types.LOAD_CERTIFICATES_ERROR,
    payload: null
});

export const createCertificate = (certificate: CertificateCreateUpdateDto): types.CreateCertificatesAction => ({
    type: types.CREATE_CERTIFICATE,
    payload: certificate
});

export const updateCertificate = (certificate: CertificateCreateUpdateDto): types.UpdateCertificatesAction => ({
    type: types.UPDATE_CERTIFICATE,
    payload: certificate
});

export const deleteCertificate = (certificateId: number): types.DeleteCertificatesAction => ({
    type: types.DELETE_CERTIFICATE,
    payload: certificateId
});