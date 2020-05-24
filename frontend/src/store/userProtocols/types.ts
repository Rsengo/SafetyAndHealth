import { ReduxAction } from '../interfaces';
import { UserProtocolDto, UserProtocolCreateUpdateDto } from '../../api/models/UserProtocol';

export const LOAD_USER_PROTOCOLS: string = 'userProtocols/LOAD_USER_PROTOCOLS';
export const LOAD_USER_PROTOCOLS_SUCCESS: string = 'userProtocols/LOAD_USER_PROTOCOLS_SUCCESS';
export const LOAD_USER_PROTOCOLS_ERROR: string = 'userProtocols/LOAD_USER_PROTOCOLS_ERROR';

export interface LoadUserProtocolsAction extends ReduxAction<null> {}
export interface LoadUserProtocolsSuccessAction extends ReduxAction<UserProtocolDto[]> {}
export interface LoadUserProtocolsErrorAction extends ReduxAction<null> {}

export const CREATE_USER_PROTOCOL: string = 'userProtocols/CREATE_USER_PROTOCOL';
export const UPDATE_USER_PROTOCOL: string = 'userProtocols/UPDATE_USER_PROTOCOL';
export const DELETE_USER_PROTOCOL: string = 'userProtocols/DELETE_USER_PROTOCOL';

export interface CreateUserProtocolsAction extends ReduxAction<UserProtocolCreateUpdateDto> {}
export interface UpdateUserProtocolsAction extends ReduxAction<UserProtocolCreateUpdateDto> {}
export interface DeleteUserProtocolsAction extends ReduxAction<number> {}

export type UserProtocolsActionTypes = 
    LoadUserProtocolsAction |
    LoadUserProtocolsSuccessAction |
    LoadUserProtocolsErrorAction |
    CreateUserProtocolsAction |
    UpdateUserProtocolsAction |
    DeleteUserProtocolsAction;