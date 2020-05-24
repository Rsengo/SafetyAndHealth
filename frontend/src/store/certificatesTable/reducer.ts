import { Reducer } from 'redux';
import * as types from './types';
import CertificatesTableState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<CertificatesTableState, types.CertificatesTableActionTypes> = (
    state: CertificatesTableState = PreloadedState.certificatesTable,
    action: types.CertificatesTableActionTypes
) => {
    switch (action.type) {
        case types.LOAD_CERTIFICATES_TABLE:
            return { ...state, loading: true };
        
        case types.LOAD_CERTIFICATES_TABLE_SUCCESS:
            const typedAction = action as types.LoadCertificatesTableSuccessAction;
            return {
                ...state,
                table: typedAction.payload,
                loading: false
            };

        case types.LOAD_CERTIFICATES_TABLE_ERROR:
            return {
                ...state,
                ...PreloadedState.certificatesTable
            };
        default:
            return { ...state };
    }
};

export default reducer;