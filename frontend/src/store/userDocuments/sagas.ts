import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { SagaExtraParams } from '../interfaces';
import * as actions from './actions';
import * as types from './types';
import { UserCertificateDto } from '../../api/models/UserCertificate';
import { UserProtocolDto } from '../../api/models/UserProtocol';
  
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
        call(() => api.userCertificate.create(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        put(actions.loadUserCertificates());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

function* loadUserProtocolsWorker(api: ApiClient) {
    try {
        //TODO maybe need start loading action put
        const data: UserProtocolDto[] = yield call(api.userProtocol.getAll);
        yield put(actions.loadUserProtocolsSuccess(data)); // TODO: toast
    } catch (error) {
        yield put(actions.loadUserProtocolsError()); // TODO: toast
    }
}

function* createUserProtocolWorker(api: ApiClient, action: types.CreateUserProtocolsAction) {
    try {
        call(() => api.userProtocol.create(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        put(actions.loadUserProtocols());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

export default function* userDocumentsSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadUserCertificatesWorker>(
        types.LOAD_USER_CERTIFICATES,
        loadUserCertificatesWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof loadUserProtocolsWorker>(
        types.CREATE_USER_CERTIFICATE, 
        loadUserProtocolsWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof loadUserCertificatesWorker>(
        types.LOAD_USER_PROTOCOLS, 
        loadUserCertificatesWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof createUserProtocolWorker>(
        types.CREATE_USER_PROTOCOL, 
        createUserProtocolWorker, 
        extra.api);
}