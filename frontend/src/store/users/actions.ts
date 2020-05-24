import * as types from './types';
import { UserDto, UserCreateDto } from '../../api/models/User';

export const loadUserList = (): types.LoadUserListAction => ({
    type: types.LOAD_USER_LIST,
    payload: null
});

export const loadUserListSuccess = (userList: UserDto[]): types.LoadUserListSuccessAction => ({
    type: types.LOAD_USER_LIST_SUCCESS,
    payload: userList
});

export const loadUserListError = (): types.LoadUserListErrorAction => ({
    type: types.LOAD_USER_LIST_ERROR,
    payload: null
});

export const registerUser = (data: UserCreateDto): types.RegisterUserAction => ({
    type: types.REGISTER_USER,
    payload: data
});