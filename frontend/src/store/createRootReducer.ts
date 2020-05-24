import { Reducer, combineReducers } from 'redux'
import { ReduxAction, ReduxState } from './interfaces';

import usersReducer from './users/reducer';
import navigationReducer from './navigation/reducer';
import certificatesReducer from './certificates/reducer';
import positionsReducer from './positions/reducer';
import userCertificatesReducer from './userCertificates/reducer';
import userProtocolsReducer from './userProtocols/reducer';
import certificatesTableReducer from './certificatesTable/reducer';

const createRootReducer = (): Reducer<ReduxState, ReduxAction> => combineReducers({
    users: usersReducer,
    navigation: navigationReducer,
    certificates: certificatesReducer,
    positions: positionsReducer,
    userCertificates: userCertificatesReducer,
    userProtocols: userProtocolsReducer,
    certificatesTable: certificatesTableReducer
});

export default createRootReducer;