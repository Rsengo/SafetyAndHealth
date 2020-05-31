import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { LOAD_USER_LIST, REGISTER_USER, RegisterUserAction } from './types';
import { SagaExtraParams } from '../interfaces';
import { UserDto } from '../../api/models/User';
import * as actions from './actions';
  
function* loadUserListWorker(api: ApiClient) {
    try {
        //TODO maybe need start loading action put
        const data: UserDto[] = yield call(api.user.getAll);
        yield put(actions.loadUserListSuccess(data)); // TODO: toast
    } catch (error) {
        yield put(actions.loadUserListError()); // TODO: toast
    }
}

function* registerUserWorker(api: ApiClient, action: RegisterUserAction) {
    try {
        yield call(() => api.user.create(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        yield put(actions.loadUserList());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

export default function* usersSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadUserListWorker>(
        LOAD_USER_LIST, 
        loadUserListWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof registerUserWorker>(
        REGISTER_USER, 
        registerUserWorker, 
        extra.api);
}