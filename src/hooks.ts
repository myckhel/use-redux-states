import { useCallback, useLayoutEffect, useMemo } from 'react'
import { useSelector, useStore, useDispatch } from 'react-redux'
import libConfig from './config'
import { createSelector } from 'reselect'
import { get, isObject, isString } from 'lodash'
import isEqual from 'react-fast-compare'
import { unique, sel, getState, setState, action, selector } from './helpers'

import {
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE,
  STATE_NAME
} from './constants'

import { ReduxStateProps, ReduxStateReducer, StateSelectorPath } from './types'

/**
 * select state from redux efficiently and memoized.
 * @param  {function|string} selectorOrPath selector function or state path
 * @param  {function} select state result selector
 * @param  {function} eq equality
 * @return {any}      selected redux state
 */
export const useMemoSelector = (
  selectorOrPath: StateSelectorPath,
  select = sel,
  eq = isEqual
) =>
  useSelector(
    createSelector(
      isString(selectorOrPath)
        ? (state) => selector(state, selectorOrPath)
        : selectorOrPath,
      select
    ),
    eq
  )

/**
 * select state from redux root store efficiently and memoized.
 * @param  {function|string} selectorOrPath selector function or state path
 * @param  {function} select state result selector
 * @param  {function} eq equality
 * @return {any}      selected redux state
 */
export const useRootMemoSelector = (
  selectorOrPath: StateSelectorPath,
  select = sel,
  eq = isEqual
) =>
  useSelector(
    createSelector(
      isString(selectorOrPath)
        ? (state) => get(state, selectorOrPath)
        : selectorOrPath,
      select
    ),
    eq
  )

/**
 * creates redux state at runtime
 * @param  {string|object} config state path or configuration object
 * @param  {any} initState initial state
 * @return {object}      object containing various helpers
 */
export const useReduxState = (
  config: ReduxStateProps | string,
  initState?: any
) => {
  const store = useStore()
  const dispatch = useDispatch()

  // memoized state path
  const path = useMemo(
    () =>
      isString(config) ? config : config?.path || config?.name || `${unique()}`,
    [config]
  )

  // memoized redux action callback to dispatch action for the current state
  const _action = useCallback(
    (payload, reducer) => action(path, payload, reducer),
    [path]
  )

  // memoized redux action to dispatch cleanup action
  const cleanUpAction = useCallback(
    (payload?) => ({ type: CLEANUP_REDUX_STATE, payload, path }),
    [path]
  )

  // memoized redux action to dispatch subscription action for the current state
  const stateSubscriptionAction = useCallback(
    (payload, extend = {}) => ({
      type: SUBSCRIBE_REDUX_STATE,
      payload,
      path,
      ...extend
    }),
    [path]
  )

  // memoized redux action to dispatch un-subscribe action for the current state
  const stateUnSubscriptionAction = useCallback(
    (payload, extend = {}) => ({
      type: UNSUBSCRIBE_REDUX_STATE,
      payload,
      path,
      ...extend
    }),
    [path]
  )

  // memoized callback to get state for the current state
  const _getState = useCallback(
    (callable = sel) => getState(store, path, callable),
    [path]
  )

  // memoized callback to get initial state for this hook
  const getInit = useCallback(() => {
    const state = isString(config) ? initState : config?.state
    if (typeof state === 'function') {
      return state(_getState())
    } else {
      return state
    }
  }, [isObject(config) && config?.state, initState])

  // memoized callback to set state for the current state
  const _setState = useCallback(
    <T>(payload: T, reducer: ReduxStateReducer) =>
      setState(dispatch, _action, payload, reducer),
    [dispatch, _action]
  )

  // memoized callback to select state for the current state
  const _selector = useCallback(
    (state) => {
      const storeState = selector(state, path)
      return storeState !== undefined ? storeState : getInit()
    },
    [path]
  )

  // memoized callback to dispatch cleanup action for the current state
  const cleanup = useCallback(() => dispatch(cleanUpAction()), [cleanUpAction])

  // memoized callback to get subscriptions count for the current state
  const getStateSubscription = useCallback(
    () => get(store?.getState()[STATE_NAME].redux_state_subscriptions, path, 0),
    [path]
  )

  // initialize the state on layout
  useLayoutEffect(() => {
    const _config: ReduxStateProps = isObject(config) ? config : {}

    if (!_config?.unmount) {
      const initialState = getInit()
      const shouldCleanup =
        config === undefined ||
        _config?.cleanup ||
        (_config?.cleanup === undefined && libConfig?.cleanup)

      // if cleanup is enabled
      if (shouldCleanup) {
        // subsribe to state with initial state
        dispatch(
          stateSubscriptionAction(initialState, {
            cleanup: true,
            reducer: _config?.reducer
          })
        )

        // un-subsribe from state when hook unmounts
        return () =>
          dispatch(
            stateUnSubscriptionAction(undefined, {
              cleanup: true
            })
          )
      } else if (getStateSubscription() < 1 || initialState !== undefined) {
        // subsribe to state once || with initial state
        dispatch(
          stateSubscriptionAction(initialState, {
            cleanup: false,
            reducer: _config?.reducer
          })
        )
      }
    }
    return () => {}
  }, [path, isObject(config) && config?.unmount])

  /**
   * select state from the current redux store path efficiently and memoized.
   * @param  {function} select state result selector
   * @param  {function} eq equality
   * @return {any}      selected redux state
   */
  const useStateSelector = useCallback(
    (select, eq) => useMemoSelector(_selector, select, eq),
    [_selector]
  )

  return {
    selector: _selector,
    setState: _setState,
    getState: _getState,
    action: _action,
    cleanup,
    useMemoSelector,
    useStateSelector
  }
}

/**
 * Hook to get the setState function for the given state
 * @param  {string} path redux state path
 * @return {function}      setState function to set state for the given state
 */
export const useSetState = (path: string) => {
  const dispatch = useDispatch()
  const _action = useCallback(
    (payload, reducer) => action(path, payload, reducer),
    [path]
  )

  // memoized setState callback
  return useCallback(
    (payload, setter) => setState(dispatch, _action, payload, setter),
    [dispatch, _action]
  )
}

/**
 * Hook to get the getState function for the given state
 * @param  {string} path redux state path
 * @return {function}      getState function to get state for the given state
 */
export const useGetState = (path: string) => {
  const store = useStore()
  // memoized getState callback
  return useCallback((callable) => getState(store, path, callable), [
    path,
    store
  ])
}
