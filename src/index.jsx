// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer';
import sendMessageReducer from './reducers/send_message_reducer';
import changeChannelReducer from './reducers/change_channel_reducer';

const middlewares = applyMiddleware(reduxPromise, logger);

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  sendMessage: sendMessageReducer,
  channel: changeChannelReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
