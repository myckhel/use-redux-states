import { setStore } from './store'
import { useReduxState, useMemoSelector } from './hooks'
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
  setStore,
  mergeReducers,
  useMemoSelector,
  STATE_NAME,
  SET_REDUX_STATE,
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE
}
