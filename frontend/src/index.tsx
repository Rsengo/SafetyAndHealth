import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import { ReduxStore, SagaExtraParams } from './store/interfaces';
import configureStore from './store/configureStore';
import ApiClient from './api/client/ApiClient';
import ApiClientConfig from './api/client/ApiClientConfig';
import ApiConstants from './constants/ApiConstants.json';

const apiConfig: ApiClientConfig = {
  baseURL: ApiConstants.baseUrl
};
const api = new ApiClient(apiConfig);
const sagaExtra: SagaExtraParams = { api }
const store: ReduxStore = configureStore(sagaExtra);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
