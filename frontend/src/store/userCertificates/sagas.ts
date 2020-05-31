import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { SagaExtraParams } from '../interfaces';
import * as actions from './actions';
import * as types from './types';
import { UserCertificateDto } from '../../api/models/UserCertificate';
  
function* loadUserCertificatesWorker(api: ApiClient) {
    try {
        //TODO maybe need start loading action put
        const data: UserCertificateDto[] = yield call(api.userCertificate.getAll);
        yield put(actions.loadUserCertificatesSuccess(data)); // TODO: toast
    } catch (error) {
        yield put(actions.loadUserCertificatesError()); // TODO: toast
    }
}

function* createUserCertificateWorker(api: ApiClient, action: types.CreateUserCertificatesAction) {
    try {
        yield call(() => api.userCertificate.create(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        yield put(actions.loadUserCertificates());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

export default function* userDCertificatesSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadUserCertificatesWorker>(
        types.LOAD_USER_CERTIFICATES,
        loadUserCertificatesWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof createUserCertificateWorker>(
        types.CREATE_USER_CERTIFICATE, 
        createUserCertificateWorker, 
        extra.api);
}