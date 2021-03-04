import { setConfig } from './config'
import {
  useReduxState,
  useMemoSelector,
  getState,
  setState,
  action,
  selector
} from './hooks'
import mergeReducers from './reducers'
import {
  STATE_NAME,
  SET_REDUX_STATE,
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE
} from './constants'

export default useReduxState
export {
  useReduxState,
  setConfig,
  mergeReducers,
  useMemoSelector,
  getState,
  setState,
  action,
  selector,
  STATE_NAME,
  SET_REDUX_STATE,
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE
}
