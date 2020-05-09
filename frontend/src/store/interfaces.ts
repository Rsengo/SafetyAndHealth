import { Action, Store } from 'redux';
import UsersState from './users/state';
import ApiClient from '../api/client/ApiClient';

export interface ReduxState {
    users: UsersState
}

export interface ReduxAction<TPayload extends any = any> extends Action<string> {
    payload: TPayload;
}

export interface ReduxStore extends Store<ReduxState> { }

export interface SagaExtraParams {
    api: ApiClient;
}