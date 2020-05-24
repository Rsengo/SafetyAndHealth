import { createStore, applyMiddleware, Reducer } from 'redux'
import createSagaMiddleware, { SagaMiddleware, Saga } from 'redux-saga'
import { ReduxAction, ReduxStore, ReduxState, SagaExtraParams } from './interfaces';
import createRootReducer from './createRootReducer';
import rootSaga from './rootSaga';

const configureStore = (sagaExtra: SagaExtraParams): ReduxStore => {
    const rootReducer: Reducer<ReduxState, ReduxAction> = createRootReducer();
    const sagaMiddleware: SagaMiddleware = createSagaMiddleware(); //TODO generic type

    const store: ReduxStore = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga, sagaExtra);

    return store;
};

export default configureStore;