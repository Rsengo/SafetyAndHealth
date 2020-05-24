import { Reducer } from 'redux';
import * as types from './types';
import UserCertificatesState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<UserCertificatesState, types.UserCertificatesActionTypes> = (
    state: UserCertificatesState = PreloadedState.userCertificates,
    action: types.UserCertificatesActionTypes
) => {
    switch (action.type) {
        case types.LOAD_USER_CERTIFICATES:
            return { ...state, loading: true };
        
        case types.LOAD_USER_CERTIFICATES_SUCCESS:
            const typedCertificateAction = action as types.LoadUserCertificatesSuccessAction;
            return {
                ...state,
                userCertificates: typedCertificateAction.payload,
                loading: false
            };

        case types.LOAD_USER_CERTIFICATES_ERROR:
            return {
                ...state,
                ...PreloadedState.userCertificates
            };

        default:
            return { ...state };
    }
};

export default reducer;