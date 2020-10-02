import { useCallback, useLayoutEffect, useRef } from 'react'
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

export const useMemoSelector = (selector, select = sel, eq = _.isEqual) =>
  useSelector(createSelector(selector, select), eq)

export const useReduxState = (name, initState) => {
  const store = useRef(storage.store).current
  const dispatch = useDispatch()
  const action = useCallback(
    (payload) => ({ type: SET_REDUX_STATE, payload, name }),
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
      name
    }),
    [name]
  )

  const setState = useCallback(
    (payload) =>
      dispatch(
        action(typeof payload === 'function' ? payload(getState()) : payload)
      ),
    []
  )

  const selector = useCallback(
    (state) => {
      const storeState = state?.[STATE_NAME]?.[name]
      return storeState !== undefined
        ? storeState
        : initState !== undefined
        ? initState
        : ''
    },
    [name]
  )

  const cleanup = useCallback(() => dispatch(cleanUpAction()), [cleanUpAction])

  const getState = useCallback(() => store?.getState()?.[STATE_NAME]?.[name], [
    name
  ])

  const getSateSubscription = useCallback(
    () =>
      store?.getState()?.[STATE_NAME]?.redux_state_subscriptions?.[name] || 0,
    [name]
  )

  useLayoutEffect(() => {
    const subCount = getSateSubscription()

    subCount < 1 && initState !== undefined && setState(initState)

    // subsribe to state
    dispatch(stateSubscriptionAction())

    return () => {
      dispatch(stateUnSubscriptionAction())
    }
  }, [])

  return { selector, setState, getState, action, cleanup }
}
