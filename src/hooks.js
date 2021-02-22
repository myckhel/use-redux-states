import { useCallback, useLayoutEffect, useRef, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import storage from './store'
import { createSelector } from 'reselect'
import { get } from 'lodash'
import isEqual from 'react-fast-compare'

import {
  SET_REDUX_STATE,
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE,
  STATE_NAME
} from './constants'

const sel = (state) => state

const unique = () => new Date().getTime()

const isString = (val) => typeof val === 'string'

export const useMemoSelector = (selector, select = sel, eq = isEqual) =>
  useSelector(createSelector(selector, select), eq)

export const useReduxState = (config, initState) => {
  const dispatch = useDispatch()
  const store = useRef(storage.store).current

  const name = useMemo(
    () => (isString(config) ? config : config?.name || unique()),
    [config]
  )

  const _action = useCallback(
    (payload, reducer) => action(name, payload, reducer),
    [name]
  )
  const cleanUpAction = useCallback(
    (payload) => ({ type: CLEANUP_REDUX_STATE, payload, name }),
    [name]
  )

  const stateSubscriptionAction = useCallback(
    (payload, extend = {}) => ({
      type: SUBSCRIBE_REDUX_STATE,
      payload,
      name,
      ...extend
    }),
    [name, config?.cleanup]
  )
  const stateUnSubscriptionAction = useCallback(
    (payload, extend = {}) => ({
      type: UNSUBSCRIBE_REDUX_STATE,
      payload,
      name,
      ...extend
    }),
    [name, config?.cleanup]
  )

  const _getState = useCallback(
    (callable = sel) => getState(store, name, callable),
    [name]
  )

  const getInit = useCallback(() => {
    const state = isString(config) ? initState : config?.state
    if (typeof state === 'function') {
      return state(_getState())
    } else {
      return state
    }
  }, [config?.state, initState])

  const _setState = useCallback(
    (payload, reducer) => setState(dispatch, _action, payload, reducer),
    [dispatch, _action]
  )

  const _selector = useCallback(
    (state) => {
      const storeState = selector(state, name, getInit)
      return storeState !== undefined ? storeState : getInit()
    },
    [name]
  )

  const cleanup = useCallback(() => dispatch(cleanUpAction()), [cleanUpAction])

  const getSateSubscription = useCallback(
    () => get(store?.getState()[STATE_NAME].redux_state_subscriptions, name, 0),
    [name]
  )

  useLayoutEffect(() => {
    if (!config?.unmount) {
      const subCount = getSateSubscription()
      const initialState = getInit()

      if (
        config?.cleanup ||
        (config?.cleanup === undefined && storage?.config?.cleanup)
      ) {
        // subsribe to state
        dispatch(
          stateSubscriptionAction(initialState, {
            cleanup: config?.cleanup,
            reducer: config?.reducer
          })
        )

        return () =>
          dispatch(
            stateUnSubscriptionAction(undefined, {
              cleanup: config?.cleanup
            })
          )
      } else if (subCount < 1 && initialState !== undefined) {
        // subsribe to state once
        dispatch(
          stateSubscriptionAction(initialState, {
            cleanup: false,
            reducer: config?.reducer
          })
        )
      }
    }
  }, [name, config?.unmount])

  return {
    selector: _selector,
    setState: _setState,
    getState: _getState,
    action: _action,
    cleanup,
    useMemoSelector
  }
}

export const getState = (store, name, callable = sel) =>
  callable(get(store?.getState()?.[STATE_NAME], name))

export const setState = (dispatch, action, payload, reducer) =>
  dispatch(action(payload, reducer))

export const action = (name, payload, reducer) => ({
  type: SET_REDUX_STATE,
  payload,
  name,
  reducer
})

export const selector = (state, name, getInit = () => undefined) =>
  get(state?.[STATE_NAME], name)
