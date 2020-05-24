import { ReduxAction } from '../interfaces';
import { UserCertificateDto, UserCertificateCreateUpdateDto } from '../../api/models/UserCertificate';

export const LOAD_USER_CERTIFICATES: string = 'userCertificates/LOAD_USER_CERTIFICATES';
export const LOAD_USER_CERTIFICATES_SUCCESS: string = 'userCertificates/LOAD_USER_CERTIFICATES_SUCCESS';
export const LOAD_USER_CERTIFICATES_ERROR: string = 'userCertificates/LOAD_USER_CERTIFICATES_ERROR';

export interface LoadUserCertificatesAction extends ReduxAction<null> {}
export interface LoadUserCertificatesSuccessAction extends ReduxAction<UserCertificateDto[]> {}
export interface LoadUserCertificatesErrorAction extends ReduxAction<null> {}

export const CREATE_USER_CERTIFICATE: string = 'userCertificates/CREATE_USER_CERTIFICATE';
export const UPDATE_USER_CERTIFICATE: string = 'userCertificates/UPDATE_USER_CERTIFICATE';
export const DELETE_USER_CERTIFICATE: string = 'userCertificates/DELETE_USER_CERTIFICATE';

export interface CreateUserCertificatesAction extends ReduxAction<UserCertificateCreateUpdateDto> {}
export interface UpdateUserCertificatesAction extends ReduxAction<UserCertificateCreateUpdateDto> {}
export interface DeleteUserCertificatesAction extends ReduxAction<number> {}

export type UserCertificatesActionTypes = 
    LoadUserCertificatesAction |
    LoadUserCertificatesSuccessAction |
    LoadUserCertificatesErrorAction |
    CreateUserCertificatesAction |
    UpdateUserCertificatesAction |
    DeleteUserCertificatesAction;