import {createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
//reducer
import reducers from '../reducers';

const composer = __DEV__ ? composeWithDevTools() : compose();

export const store = createStore(reducers, composer);
