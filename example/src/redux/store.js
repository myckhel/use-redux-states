import {createStore} from 'redux';
import reducers from './reducers';
import { setStore } from 'use-redux-state-hook'

const store = createStore(reducers);
setStore(store);
export default store;
