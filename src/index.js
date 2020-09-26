import { setStore } from './store'
import { useReduxState, useMemoSelector } from './hooks'
import mergeReducers from './reducers'

export default useReduxState
export { useReduxState, setStore, mergeReducers, useMemoSelector }
