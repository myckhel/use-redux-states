import state from './state/reducer';
import { mergeReducers } from 'use-redux-states'

const appReducer = mergeReducers({state});

export default appReducer;
