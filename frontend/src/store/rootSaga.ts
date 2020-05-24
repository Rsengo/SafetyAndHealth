import { all } from 'redux-saga/effects';
import { SagaExtraParams } from './interfaces';
import usersSaga from './users/sagas';
import certificatesSaga from './certificates/sagas';
import positionsSaga from './positions/sagas';
import userCertificatesSaga from './userCertificates/sagas';
import userProtocolsSaga from './userProtocols/sagas';
import certificatesTableSaga from './certificatesTable/sagas';

// TODO all sagas typing
export default function* rootSaga(extra: SagaExtraParams) {
    yield all([
        usersSaga(extra),
        certificatesSaga(extra),
        positionsSaga(extra),
        userCertificatesSaga(extra),
        userProtocolsSaga(extra),
        certificatesTableSaga(extra)
    ]);
}