import axios from 'axios';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import messages from './messages';
import channels from './channels'
import name from './name'
import writeMessage from './newMessageEntry'
import writeChannel from './newChannelEntry'


const reducer = combineReducers({
  messages,
  channels,
  name,
  writeChannel,
  writeMessage
})


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;
export * from './messages';
export * from './channels'
export * from './name'
export * from './newMessageEntry'
export * from './newChannelEntry'
