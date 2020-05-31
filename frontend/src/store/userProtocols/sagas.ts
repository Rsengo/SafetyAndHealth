import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { SagaExtraParams } from '../interfaces';
import * as actions from './actions';
import * as types from './types';
import { UserProtocolDto } from '../../api/models/UserProtocol';

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
        yield call(() => api.userProtocol.create(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        yield put(actions.loadUserProtocols());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

export default function* userDocumentsSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadUserProtocolsWorker>(
        types.LOAD_USER_PROTOCOLS, 
        loadUserProtocolsWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof createUserProtocolWorker>(
        types.CREATE_USER_PROTOCOL, 
        createUserProtocolWorker, 
        extra.api);
}