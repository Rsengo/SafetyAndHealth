import { ReduxAction } from '../interfaces';
import { UserCertificateDto, UserCertificateCreateUpdateDto } from '../../api/models/UserCertificate';
import { UserProtocolDto, UserProtocolCreateUpdateDto } from '../../api/models/UserProtocol';

export const LOAD_USER_CERTIFICATES: string = 'userDocuments/LOAD_USER_CERTIFICATES';
export const LOAD_USER_CERTIFICATES_SUCCESS: string = 'userDocuments/LOAD_USER_CERTIFICATES_SUCCESS';
export const LOAD_USER_CERTIFICATES_ERROR: string = 'userDocuments/LOAD_USER_CERTIFICATES_ERROR';

export interface LoadUserCertificatesAction extends ReduxAction<null> {}
export interface LoadUserCertificatesSuccessAction extends ReduxAction<UserCertificateDto[]> {}
export interface LoadUserCertificatesErrorAction extends ReduxAction<null> {}

export const CREATE_USER_CERTIFICATE: string = 'userDocuments/CREATE_USER_CERTIFICATE';
export const UPDATE_USER_CERTIFICATE: string = 'userDocuments/UPDATE_USER_CERTIFICATE';
export const DELETE_USER_CERTIFICATE: string = 'userDocuments/DELETE_USER_CERTIFICATE';

export interface CreateUserCertificatesAction extends ReduxAction<UserCertificateCreateUpdateDto> {}
export interface UpdateUserCertificatesAction extends ReduxAction<UserCertificateCreateUpdateDto> {}
export interface DeleteUserCertificatesAction extends ReduxAction<number> {}

export const LOAD_USER_PROTOCOLS: string = 'userDocuments/LOAD_USER_PROTOCOLS';
export const LOAD_USER_PROTOCOLS_SUCCESS: string = 'userDocuments/LOAD_USER_PROTOCOLS_SUCCESS';
export const LOAD_USER_PROTOCOLS_ERROR: string = 'userDocuments/LOAD_USER_PROTOCOLS_ERROR';

export interface LoadUserProtocolsAction extends ReduxAction<null> {}
export interface LoadUserProtocolsSuccessAction extends ReduxAction<UserProtocolDto[]> {}
export interface LoadUserProtocolsErrorAction extends ReduxAction<null> {}

export const CREATE_USER_PROTOCOL: string = 'userDocuments/CREATE_USER_PROTOCOL';
export const UPDATE_USER_PROTOCOL: string = 'userDocuments/UPDATE_USER_PROTOCOL';
export const DELETE_USER_PROTOCOL: string = 'userDocuments/DELETE_USER_PROTOCOL';

export interface CreateUserProtocolsAction extends ReduxAction<UserProtocolCreateUpdateDto> {}
export interface UpdateUserProtocolsAction extends ReduxAction<UserProtocolCreateUpdateDto> {}
export interface DeleteUserProtocolsAction extends ReduxAction<number> {}

export type UserDocumentsActionTypes = 
    LoadUserCertificatesAction |
    LoadUserCertificatesSuccessAction |
    LoadUserCertificatesErrorAction |
    CreateUserCertificatesAction |
    UpdateUserCertificatesAction |
    DeleteUserCertificatesAction |
    LoadUserProtocolsAction |
    LoadUserProtocolsSuccessAction |
    LoadUserProtocolsErrorAction |
    CreateUserProtocolsAction |
    UpdateUserProtocolsAction |
    DeleteUserProtocolsAction;