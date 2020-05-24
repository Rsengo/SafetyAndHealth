import { ReduxAction } from '../interfaces';
import { UserDto, UserCreateDto } from '../../api/models/User';

export const LOAD_USER_LIST: string = 'users/LOAD_USER_LIST';
export const LOAD_USER_LIST_SUCCESS: string = 'users/LOAD_USER_LIST_SUCCESS';
export const LOAD_USER_LIST_ERROR: string = 'users/LOAD_USER_LIST_ERROR';

export interface LoadUserListAction extends ReduxAction<null> {}
export interface LoadUserListSuccessAction extends ReduxAction<UserDto[]> {}
export interface LoadUserListErrorAction extends ReduxAction<null> {}

export const REGISTER_USER: string = 'users/REGISTER_USER';

export interface RegisterUserAction extends ReduxAction<UserCreateDto> {}

export type UsersActionTypes = 
    LoadUserListAction |
    LoadUserListSuccessAction |
    LoadUserListErrorAction |
    RegisterUserAction;