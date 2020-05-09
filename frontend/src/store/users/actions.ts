import { 
    LOAD_USER_LIST, 
    LOAD_USER_LIST_SUCCESS, 
    LOAD_USER_LIST_ERROR, 
    LoadUserListSuccessAction, 
    LoadUserListAction, 
    LoadUserListErrorAction 
} from './types';
import { UserDto } from '../../api/models/User';

export const loadUserList = (): LoadUserListAction => ({
    type: LOAD_USER_LIST,
    payload: null
});

export const loadUserListSuccess = (userList: UserDto[]): LoadUserListSuccessAction => ({
    type: LOAD_USER_LIST_SUCCESS,
    payload: userList
});

export const loadUserListError = (): LoadUserListErrorAction => ({
    type: LOAD_USER_LIST_ERROR,
    payload: null
});