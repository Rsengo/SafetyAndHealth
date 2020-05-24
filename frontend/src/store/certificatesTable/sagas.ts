import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { SagaExtraParams } from '../interfaces';
import { CertificatesTableDto } from '../../api/models/CertificatesTable';
import * as actions from './actions';
import * as types from './types';
  
function* loadCertificatesTableWorker(api: ApiClient) {
    try {
        //TODO maybe need start loading action put
        const data: CertificatesTableDto = yield call(api.certificatesTable.getTableData);
        yield put(actions.loadCertificatesTableSuccess(data)); // TODO: toast
    } catch (error) {
        yield put(actions.loadCertificatesTableError()); // TODO: toast
    }
}

export default function* positionsSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadCertificatesTableWorker>(
        types.LOAD_CERTIFICATES_TABLE, 
        loadCertificatesTableWorker, 
        extra.api);
}