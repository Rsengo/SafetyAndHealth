import * as types from './types';
import { UserCertificateDto, UserCertificateCreateUpdateDto } from '../../api/models/UserCertificate';
import { UserProtocolDto, UserProtocolCreateUpdateDto } from '../../api/models/UserProtocol';

export const loadUserCertificates = (): types.LoadUserCertificatesAction => ({
    type: types.LOAD_USER_CERTIFICATES,
    payload: null
});

export const loadUserCertificatesSuccess = (userCertificates: UserCertificateDto[]): types.LoadUserCertificatesSuccessAction => ({
    type: types.LOAD_USER_CERTIFICATES_SUCCESS,
    payload: userCertificates
});

export const loadUserCertificatesError = (): types.LoadUserCertificatesErrorAction => ({
    type: types.LOAD_USER_CERTIFICATES_ERROR,
    payload: null
});

export const createUserCertificate = (userCertificate: UserCertificateCreateUpdateDto): types.CreateUserCertificatesAction => ({
    type: types.CREATE_USER_CERTIFICATE,
    payload: userCertificate
});

export const updateUserCertificate = (userCertificate: UserCertificateCreateUpdateDto): types.UpdateUserCertificatesAction => ({
    type: types.UPDATE_USER_CERTIFICATE,
    payload: userCertificate
});

export const deleteUserCertificate = (userCertificateId: number): types.DeleteUserCertificatesAction => ({
    type: types.DELETE_USER_CERTIFICATE,
    payload: userCertificateId
});

export const loadUserProtocols = (): types.LoadUserProtocolsAction => ({
    type: types.LOAD_USER_PROTOCOLS,
    payload: null
});

export const loadUserProtocolsSuccess = (userProtocols: UserProtocolDto[]): types.LoadUserProtocolsSuccessAction => ({
    type: types.LOAD_USER_PROTOCOLS_SUCCESS,
    payload: userProtocols
});

export const loadUserProtocolsError = (): types.LoadUserProtocolsErrorAction => ({
    type: types.LOAD_USER_PROTOCOLS_ERROR,
    payload: null
});

export const createUserProtocol = (userProtocol: UserProtocolCreateUpdateDto): types.CreateUserProtocolsAction => ({
    type: types.CREATE_USER_PROTOCOL,
    payload: userProtocol
});

export const updateUserProtocol = (userProtocol: UserProtocolCreateUpdateDto): types.UpdateUserProtocolsAction => ({
    type: types.UPDATE_USER_PROTOCOL,
    payload: userProtocol
});

export const deleteUserProtocol = (userProtocolId: number): types.DeleteUserProtocolsAction => ({
    type: types.DELETE_USER_PROTOCOL,
    payload: userProtocolId
});
