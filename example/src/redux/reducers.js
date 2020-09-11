import state from './state/reducer';
import { useStateCombineReducers } from 'use-redux-state-hook'

const appReducer = useStateCombineReducers({state});

export default appReducer;
