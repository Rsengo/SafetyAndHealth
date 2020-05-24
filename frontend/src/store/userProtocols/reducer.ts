import { Reducer } from 'redux';
import * as types from './types';
import UserProtocolsState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<UserProtocolsState, types.UserProtocolsActionTypes> = (
    state: UserProtocolsState = PreloadedState.userProtocols,
    action: types.UserProtocolsActionTypes
) => {
    switch (action.type) {
        case types.LOAD_USER_PROTOCOLS:
            return { ...state, loading: true };
        
        case types.LOAD_USER_PROTOCOLS_SUCCESS:
            const typedProtocolAction = action as types.LoadUserProtocolsSuccessAction;
            return {
                ...state,
                userProtocols: typedProtocolAction.payload,
                loading: false
            };
    
        case types.LOAD_USER_PROTOCOLS_ERROR:
            return {
                ...state,
                ...PreloadedState.userProtocols
            };

        default:
            return { ...state };
    }
};

export default reducer;