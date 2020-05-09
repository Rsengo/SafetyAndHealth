import { createStore, applyMiddleware, Reducer, combineReducers } from 'redux'
import createSagaMiddleware, { SagaMiddleware, Saga } from 'redux-saga'
import { all } from 'redux-saga/effects';
import { ReduxAction, ReduxStore, ReduxState, SagaExtraParams } from './interfaces';
import usersReducer from './users/reducer';
import usersSaga from './users/sagas';

// TODO all sagas typing
function* rootSaga(extra: SagaExtraParams) {
    yield all([
        usersSaga(extra)
    ]);
}

const configureStore = (sagaExtra: SagaExtraParams): ReduxStore => {
    const rootReducer: Reducer<ReduxState, ReduxAction> = combineReducers({
        users: usersReducer
    });
    const sagaMiddleware: SagaMiddleware = createSagaMiddleware(); //TODO generic type

    const store: ReduxStore = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run<Saga>(rootSaga, sagaExtra);

    return store;
};

export default configureStore;