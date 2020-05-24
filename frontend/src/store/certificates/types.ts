import { ReduxAction } from '../interfaces';
import { CertificateDto, CertificateCreateUpdateDto } from '../../api/models/Certificate';

export const LOAD_CERTIFICATES: string = 'certificates/LOAD_CERTIFICATES';
export const LOAD_CERTIFICATES_SUCCESS: string = 'certificates/LOAD_CERTIFICATES_SUCCESS';
export const LOAD_CERTIFICATES_ERROR: string = 'certificates/LOAD_CERTIFICATES_ERROR';

export interface LoadCertificatesAction extends ReduxAction<null> {}
export interface LoadCertificatesSuccessAction extends ReduxAction<CertificateDto[]> {}
export interface LoadCertificatesErrorAction extends ReduxAction<null> {}

export const CREATE_CERTIFICATE: string = 'certificates/CREATE_CERTIFICATE';
export const UPDATE_CERTIFICATE: string = 'certificates/UPDATE_CERTIFICATE';
export const DELETE_CERTIFICATE: string = 'certificates/DELETE_CERTIFICATE';

export interface CreateCertificatesAction extends ReduxAction<CertificateCreateUpdateDto> {}
export interface UpdateCertificatesAction extends ReduxAction<CertificateCreateUpdateDto> {}
export interface DeleteCertificatesAction extends ReduxAction<number> {}

export type CertificatesActionTypes = 
    LoadCertificatesAction |
    LoadCertificatesSuccessAction |
    LoadCertificatesErrorAction |
    CreateCertificatesAction |
    UpdateCertificatesAction |
    DeleteCertificatesAction;