import { Action, Store } from 'redux';
import UsersState from './users/state';
import NavigationState from './navigation/state';
import ApiClient from '../api/client/ApiClient';
import CertificatesState from './certificates/state';
import PositionsState from './positions/state';
import UserCertificatesState from './userCertificates/state';
import UserProtocolsState from './userProtocols/state';
import CertificatesTableState from './certificatesTable/state';

export interface ReduxState {
    users: UsersState,
    navigation: NavigationState,
    certificates: CertificatesState,
    positions: PositionsState,
    userCertificates: UserCertificatesState,
    userProtocols: UserProtocolsState,
    certificatesTable: CertificatesTableState
}

export interface ReduxAction<TPayload extends any = any> extends Action<string> {
    payload: TPayload;
}

export interface ReduxStore extends Store<ReduxState> { }

export interface SagaExtraParams {
    api: ApiClient;
}