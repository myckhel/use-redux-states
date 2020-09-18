import state from './state/reducer';
import { mergeReducers } from 'use-redux-state-hook'

const appReducer = mergeReducers({state});

export default appReducer;
