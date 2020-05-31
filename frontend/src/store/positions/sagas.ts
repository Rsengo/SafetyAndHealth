import { takeEvery, ActionPattern, put, call } from 'redux-saga/effects';
import ApiClient from '../../api/client/ApiClient';
import { SagaExtraParams } from '../interfaces';
import { PositionDto } from '../../api/models/Position';
import * as actions from './actions';
import * as types from './types';
  
function* loadPositionsWorker(api: ApiClient) {
    try {
        //TODO maybe need start loading action put
        const data: PositionDto[] = yield call(api.position.getAll);
        yield put(actions.loadPositionsSuccess(data)); // TODO: toast
    } catch (error) {
        yield put(actions.loadPositionsError()); // TODO: toast
    }
}

function* createPositionWorker(api: ApiClient, action: types.CreatePositionsAction) {
    try {
        yield call(() => api.position.create(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        yield put(actions.loadPositions());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

function* updatePositionWorker(api: ApiClient, action: types.UpdatePositionsAction) {
    try {
        yield call(() => api.position.update(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        yield put(actions.loadPositions());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

function* deletePositionWorker(api: ApiClient, action: types.DeletePositionsAction) {
    try {
        yield call(() => api.position.delete(action.payload));
        // put(actions.registerUserSuccess()) // TODO: toast
        yield put(actions.loadPositions());
    } catch (error) {
        // put(actions.registerUserError()) // TODO: toast
    }
}

export default function* positionsSaga(extra: SagaExtraParams) {
    yield takeEvery<ActionPattern, typeof loadPositionsWorker>(
        types.LOAD_POSITIONS, 
        loadPositionsWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof createPositionWorker>(
        types.CREATE_POSITION, 
        createPositionWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof updatePositionWorker>(
        types.UPDATE_POSITION, 
        updatePositionWorker, 
        extra.api);

    yield takeEvery<ActionPattern, typeof deletePositionWorker>(
        types.DELETE_POSITION, 
        deletePositionWorker, 
        extra.api);
}