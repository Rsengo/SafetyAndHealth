import { Reducer } from 'redux';
import { 
    LOAD_USER_LIST, 
    LOAD_USER_LIST_SUCCESS, 
    LOAD_USER_LIST_ERROR, 
    UsersActionTypes, 
    LoadUserListSuccessAction 
} from './types';
import UsersState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<UsersState, UsersActionTypes> = (
    state: UsersState = PreloadedState.users,
    action: UsersActionTypes
) => {
    switch (action.type) {
        case LOAD_USER_LIST:
            return { ...state, userListLoading: true };
        
        case LOAD_USER_LIST_SUCCESS:
            const typedAction = action as LoadUserListSuccessAction;
            return {
                ...state,
                userList: typedAction.payload,
                userListLoading: false
            };

        case LOAD_USER_LIST_ERROR:
            return {
                ...state,
                ...PreloadedState.users
            };

        default:
            return { ...state };
    }
};

export default reducer;