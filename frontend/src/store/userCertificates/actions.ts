import * as types from './types';
import { UserCertificateDto, UserCertificateCreateUpdateDto } from '../../api/models/UserCertificate';

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