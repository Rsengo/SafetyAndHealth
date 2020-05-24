import { all } from 'redux-saga/effects';
import { SagaExtraParams } from './interfaces';
import usersSaga from './users/sagas';
import certificatesSaga from './certificates/sagas';
import positionsSaga from './positions/sagas';
import userDocumentsSaga from './userDocuments/sagas';

// TODO all sagas typing
export default function* rootSaga(extra: SagaExtraParams) {
    yield all([
        usersSaga(extra),
        certificatesSaga(extra),
        positionsSaga(extra),
        userDocumentsSaga(extra)
    ]);
}