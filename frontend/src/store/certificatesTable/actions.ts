import * as types from './types';
import { CertificatesTableDto } from '../../api/models/CertificatesTable';

export const loadCertificatesTable = (): types.LoadCertificatesTableAction => ({
    type: types.LOAD_CERTIFICATES_TABLE,
    payload: null
});

export const loadCertificatesTableSuccess = (table: CertificatesTableDto): types.LoadCertificatesTableSuccessAction => ({
    type: types.LOAD_CERTIFICATES_TABLE_SUCCESS,
    payload: table
});

export const loadCertificatesTableError = (): types.LoadCertificatesTableErrorAction => ({
    type: types.LOAD_CERTIFICATES_TABLE_ERROR,
    payload: null
});