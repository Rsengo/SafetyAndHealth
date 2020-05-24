import { Reducer, combineReducers } from 'redux'
import { ReduxAction, ReduxState } from './interfaces';

import usersReducer from './users/reducer';
import navigationReducer from './navigation/reducer';
import certificatesReducer from './certificates/reducer';
import positionsReducer from './positions/reducer';
import userDocumentsReducer from './userDocuments/reducer';

const createRootReducer = (): Reducer<ReduxState, ReduxAction> => combineReducers({
    users: usersReducer,
    navigation: navigationReducer,
    certificates: certificatesReducer,
    positions: positionsReducer,
    userDocuments: userDocumentsReducer
});

export default createRootReducer;