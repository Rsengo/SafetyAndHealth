import { Reducer } from 'redux';
import * as types from './types';
import UsersState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<UsersState, types.UsersActionTypes> = (
    state: UsersState = PreloadedState.users,
    action: types.UsersActionTypes
) => {
    switch (action.type) {
        case types.LOAD_USER_LIST:
            return { ...state, userListLoading: true };
        
        case types.LOAD_USER_LIST_SUCCESS:
            const typedAction = action as types.LoadUserListSuccessAction;
            return {
                ...state,
                userList: typedAction.payload,
                userListLoading: false
            };

        case types.LOAD_USER_LIST_ERROR:
            return {
                ...state,
                ...PreloadedState.users
            };
        default:
            return { ...state };
    }
};

export default reducer;