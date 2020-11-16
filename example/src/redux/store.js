import {createStore} from 'redux';
import reducers from './reducers';
import { setStore } from 'use-redux-state-hook'

const store = createStore(reducers);
setStore(store, {cleanup: false});
export default store;
