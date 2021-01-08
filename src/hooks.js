import { useCallback, useLayoutEffect, useRef, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import storage from './store'
import { createSelector } from 'reselect'
import _ from 'lodash'

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

export const useMemoSelector = (selector, select = sel, eq = _.isEqual) =>
  useSelector(createSelector(selector, select), eq)

export const useReduxState = (config, initState) => {
  const dispatch = useDispatch()
  const store = useRef(storage.store).current

  const name = useMemo(
    () => (isString(config) ? config : config?.name || unique()),
    [config]
  )

  const _action = useCallback(
    (payload) => action(name, payload),
    [name]
  )
  const cleanUpAction = useCallback(
    (payload) => ({ type: CLEANUP_REDUX_STATE, payload, name }),
    [name]
  )

  const stateSubscriptionAction = useCallback(
    (payload) => ({
      type: SUBSCRIBE_REDUX_STATE,
      payload,
      name
    }),
    [name]
  )
  const stateUnSubscriptionAction = useCallback(
    (payload) => ({
      type: UNSUBSCRIBE_REDUX_STATE,
      payload,
      name,
      cleanup: config?.cleanup
    }),
    [name]
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
  }, [initState])

  const _setState = useCallback((payload) => setState(dispatch, _action, payload), [
    dispatch,
    _action
  ])

  const _selector = useCallback(
    (state) => {
      const storeState = selector(state, name, getInit)
      return storeState !== undefined ? storeState : getInit()
    },
    [name]
  )

  const cleanup = useCallback(() => dispatch(cleanUpAction()), [cleanUpAction])

  const getSateSubscription = useCallback(
    () => store?.getState()[STATE_NAME].redux_state_subscriptions[name] || 0,
    [name]
  )

  useLayoutEffect(() => {
    const subCount = getSateSubscription()
    const initialState = getInit()

    subCount < 1 && initialState !== undefined && _setState(initialState)

    // subsribe to state
    dispatch(stateSubscriptionAction(initialState))

    return () => {
      dispatch(stateUnSubscriptionAction())
    }
  }, [name])

  return { selector: _selector, setState: _setState, getState: _getState, action: _action, cleanup, useMemoSelector }
}

export const getState = (store, name, callable = sel) => callable(store?.getState()?.[STATE_NAME]?.[name])

export const setState = (dispatch, action, payload) => dispatch(action(payload))

export const action = (name, payload) => ({ type: SET_REDUX_STATE, payload, name })

export const selector = (state, name, getInit = () => undefined) => {
  return state?.[STATE_NAME]?.[name]
}
