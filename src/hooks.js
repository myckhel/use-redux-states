import { useCallback, useLayoutEffect, useMemo } from 'react'
import { useSelector, useStore, useDispatch } from 'react-redux'
import libConfig from './config'
import { createSelector } from 'reselect'
import { get } from 'lodash'
import isEqual from 'react-fast-compare'
import {
  isString,
  unique,
  sel,
  getState,
  setState,
  action,
  selector
} from './helpers'

import {
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE,
  STATE_NAME
} from './constants'

/**
 * select state from redux efficiently and memoized.
 * @param  {function|string} selectorOrName selector function or state name
 * @param  {function} select state result selector
 * @param  {function} eq equality
 * @return {any}      selected redux state
 */
export const useMemoSelector = (selectorOrName, select = sel, eq = isEqual) =>
  useSelector(
    createSelector(
      isString(selectorOrName)
        ? (state) => selector(state, selectorOrName)
        : selectorOrName,
      select
    ),
    eq
  )

/**
 * creates redux state at runtime
 * @param  {string|object} config state name or configuration object
 * @param  {any} initState initial state
 * @return {object}      object containing various helpers
 */
export const useReduxState = (config, initState) => {
  const store = useStore()
  const dispatch = useDispatch()

  // memoized state name
  const name = useMemo(
    () => (isString(config) ? config : config?.name || unique()),
    [config]
  )

  // memoized redux action callback to dispatch action for the current state
  const _action = useCallback(
    (payload, reducer) => action(name, payload, reducer),
    [name]
  )

  // memoized redux action to dispatch cleanup action
  const cleanUpAction = useCallback(
    (payload) => ({ type: CLEANUP_REDUX_STATE, payload, name }),
    [name]
  )

  // memoized redux action to dispatch subscription action for the current state
  const stateSubscriptionAction = useCallback(
    (payload, extend = {}) => ({
      type: SUBSCRIBE_REDUX_STATE,
      payload,
      name,
      ...extend
    }),
    [name]
  )

  // memoized redux action to dispatch un-subscribe action for the current state
  const stateUnSubscriptionAction = useCallback(
    (payload, extend = {}) => ({
      type: UNSUBSCRIBE_REDUX_STATE,
      payload,
      name,
      ...extend
    }),
    [name]
  )

  // memoized callback to get state for the current state
  const _getState = useCallback(
    (callable = sel) => getState(store, name, callable),
    [name]
  )

  // memoized callback to get initial state for this hook
  const getInit = useCallback(() => {
    const state = isString(config) ? initState : config?.state
    if (typeof state === 'function') {
      return state(_getState())
    } else {
      return state
    }
  }, [config?.state, initState])

  // memoized callback to set state for the current state
  const _setState = useCallback(
    (payload, reducer) => setState(dispatch, _action, payload, reducer),
    [dispatch, _action]
  )

  // memoized callback to select state for the current state
  const _selector = useCallback(
    (state) => {
      const storeState = selector(state, name)
      return storeState !== undefined ? storeState : getInit()
    },
    [name]
  )

  // memoized callback to dispatch cleanup action for the current state
  const cleanup = useCallback(() => dispatch(cleanUpAction()), [cleanUpAction])

  // memoized callback to get subscriptions count for the current state
  const getStateSubscription = useCallback(
    () => get(store?.getState()[STATE_NAME].redux_state_subscriptions, name, 0),
    [name]
  )

  // initialize the state on layout
  useLayoutEffect(() => {
    if (!config?.unmount) {
      const initialState = getInit()
      const shouldCleanup =
        config === undefined ||
        config?.cleanup ||
        (config?.cleanup === undefined && libConfig?.cleanup)

      // if cleanup is enabled
      if (shouldCleanup) {
        // subsribe to state with initial state
        dispatch(
          stateSubscriptionAction(initialState, {
            cleanup: true,
            reducer: config?.reducer
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
            reducer: config?.reducer
          })
        )
      }
    }
  }, [name, config?.unmount])

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
 * @param  {string} name redux state name
 * @return {function}      setState function to set state for the given state
 */
export const useSetState = (name) => {
  const dispatch = useDispatch()
  const _action = useCallback(
    (payload, reducer) => action(name, payload, reducer),
    [name]
  )

  // memoized setState callback
  return useCallback(
    (payload, setter) => setState(dispatch, _action, payload, setter),
    [dispatch, _action]
  )
}

/**
 * Hook to get the getState function for the given state
 * @param  {string} name redux state name
 * @return {function}      getState function to get state for the given state
 */
export const useGetState = (name) => {
  const store = useStore()
  // memoized getState callback
  return useCallback((callable) => getState(store, name, callable), [
    name,
    store
  ])
}
