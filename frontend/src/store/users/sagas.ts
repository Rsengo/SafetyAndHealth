import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { LOAD_USER_LIST } from './types';
import { SagaExtraParams } from '../interfaces';
import { UserDto } from '../../api/models/User';
import { loadUserListSuccess, loadUserListError } from './actions';
  
function* loadUserListWorker(api: ApiClient) {
    try {
        //TODO maybe need start loading action put
        const data: UserDto[] = yield call(api.user.getAll);
        yield put(loadUserListSuccess(data));
    } catch (error) {
        yield put(loadUserListError());
    }
}

export default function* usersSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadUserListWorker>(
        LOAD_USER_LIST, 
        loadUserListWorker, 
        extra.api);
}