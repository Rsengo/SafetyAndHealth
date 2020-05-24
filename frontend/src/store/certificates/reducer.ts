import { Reducer } from 'redux';
import * as types from './types';
import CertificatesState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<CertificatesState, types.CertificatesActionTypes> = (
    state: CertificatesState = PreloadedState.certificates,
    action: types.CertificatesActionTypes
) => {
    switch (action.type) {
        case types.LOAD_CERTIFICATES:
            return { ...state, loading: true };
        
        case types.LOAD_CERTIFICATES_SUCCESS:
            const typedAction = action as types.LoadCertificatesSuccessAction;
            return {
                ...state,
                certificates: typedAction.payload,
                loading: false
            };

        case types.LOAD_CERTIFICATES_ERROR:
            return {
                ...state,
                ...PreloadedState.certificates
            };
        default:
            return { ...state };
    }
};

export default reducer;