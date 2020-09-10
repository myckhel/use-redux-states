import {combineReducers} from 'redux';
import state from './state/reducer';

const appReducer = combineReducers({state});

export default appReducer;
