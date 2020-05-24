import * as types from './types';
import { UserProtocolDto, UserProtocolCreateUpdateDto } from '../../api/models/UserProtocol';

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
