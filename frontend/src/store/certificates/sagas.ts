import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { SagaExtraParams } from '../interfaces';
import { CertificateDto } from '../../api/models/Certificate';
import * as actions from './actions';
import * as types from './types';
  
function* loadCertificatesWorker(api: ApiClient) {
    try {
        //TODO maybe need start loading action put
        const data: CertificateDto[] = yield call(api.certificate.getAll);
        yield put(actions.loadCertificatesSuccess(data)); // TODO: toast
    } catch (error) {
        yield put(actions.loadCertificatesError()); // TODO: toast
    }
}

function* createCertificateWorker(api: ApiClient, action: types.CreateCertificatesAction) {
    try {
        yield call(() => api.certificate.create(action.payload));
        // TODO: toast
        yield put(actions.loadCertificates());
    } catch (error) {
        // TODO: toast
    }
}

function* updateCertificateWorker(api: ApiClient, action: types.UpdateCertificatesAction) {
    try {
        yield call(() => api.certificate.update(action.payload));
        // TODO: toast
        yield put(actions.loadCertificates());
    } catch (error) {
        // TODO: toast
    }
}

function* deleteCertificateWorker(api: ApiClient, action: types.DeleteCertificatesAction) {
    try {
        yield call(() => api.certificate.delete(action.payload));
        // TODO: toast
        yield put(actions.loadCertificates());
    } catch (error) {
        // TODO: toast
    }
}

export default function* certificatesSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadCertificatesWorker>(
        types.LOAD_CERTIFICATES, 
        loadCertificatesWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof createCertificateWorker>(
        types.CREATE_CERTIFICATE, 
        createCertificateWorker, 
        extra.api);
    
    yield takeEvery<ActionPattern, typeof updateCertificateWorker>(
        types.UPDATE_CERTIFICATE, 
        updateCertificateWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof deleteCertificateWorker>(
        types.DELETE_CERTIFICATE, 
        deleteCertificateWorker, 
        extra.api);
}