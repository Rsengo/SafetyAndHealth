import { Reducer } from 'redux';
import * as types from './types';
import UserDocumentsState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<UserDocumentsState, types.UserDocumentsActionTypes> = (
    state: UserDocumentsState = PreloadedState.userDocuments,
    action: types.UserDocumentsActionTypes
) => {
    switch (action.type) {
        case types.LOAD_USER_CERTIFICATES:
            return { ...state, userCertificatesLoading: true };
        
        case types.LOAD_USER_CERTIFICATES_SUCCESS:
            const typedCertificateAction = action as types.LoadUserCertificatesSuccessAction;
            return {
                ...state,
                userCertificates: typedCertificateAction.payload,
                userCertificatesLoading: false
            };

        case types.LOAD_USER_CERTIFICATES_ERROR:
            return {
                ...state,
                userCertificates: PreloadedState.userDocuments.userCertificates,
                userCertificatesLoading: PreloadedState.userDocuments.userCertificatesLoading
            };

        case types.LOAD_USER_PROTOCOLS:
            return { ...state, userProtocolsLoading: true };
        
        case types.LOAD_USER_PROTOCOLS_SUCCESS:
            const typedProtocolAction = action as types.LoadUserProtocolsSuccessAction;
            return {
                ...state,
                userProtocols: typedProtocolAction.payload,
                userProtocolsLoading: false
            };
    
        case types.LOAD_USER_PROTOCOLS_ERROR:
            return {
                ...state,
                userProtocols: PreloadedState.userDocuments.userProtocols,
                userProtocolsLoading: PreloadedState.userDocuments.userProtocolsLoading
            };

        default:
            return { ...state };
    }
};

export default reducer;