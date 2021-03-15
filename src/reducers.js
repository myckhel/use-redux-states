import { createSlice, combineReducers } from '@reduxjs/toolkit'
import { get } from 'lodash'

import { STATE_NAME } from './constants'

import libConfig from './config'

const INIT_STATE = {
  redux_state_subscriptions: {}
}

const clanupeEnabled = (cleanup, libConfig) =>
  cleanup || (cleanup === undefined && libConfig?.cleanup)

const { actions, reducer } = createSlice({
  name: STATE_NAME,
  initialState: INIT_STATE,
  reducers: {
    setState: (state, { name, payload, reducer }) => {
      const setter = libConfig.setter || _setter
      setWith(
        state,
        name,
        reducer
          ? reducer(get(state, name), payload)
          : typeof payload === 'function'
          ? payload(get(state, name))
          : setter(get(state, name), payload)
      )
    },

    cleanup: (state, { payload, name }) => {
      if (get(state, name)) {
        deleteWith(state, name)
      }
      if (get(state.redux_state_subscriptions, name)) {
        deleteWith(state.redux_state_subscriptions, name)
      }
    },

    subscribe: (state, { payload, name, cleanup, reducer }) => {
      const setter = libConfig.setter || _setter
      const subscriber_count = get(state.redux_state_subscriptions, name, 0)

      if (
        subscriber_count < 1 ||
        !(cleanup || (cleanup === undefined && libConfig?.cleanup))
      ) {
        setWith(state.redux_state_subscriptions, name, subscriber_count + 1)
        if (payload !== undefined || reducer) {
          setWith(
            state,
            name,
            reducer
              ? reducer(get(state, name), payload)
              : setter(get(state, name), payload)
          )
        }
      }
    },

    unsubscribe: (state, { payload, name, cleanup }) => {
      const redux_state_subscriptions = state.redux_state_subscriptions

      const subscriber_count = get(state.redux_state_subscriptions, name, 0)

      if (subscriber_count < 2 && clanupeEnabled(cleanup, libConfig)) {
        if (get(state, name)) {
          deleteWith(state, name)
        }

        if (get(redux_state_subscriptions, name)) {
          deleteWith(redux_state_subscriptions, name)
        }
      } else {
        setWith(state.redux_state_subscriptions, name, subscriber_count - 1)
      }
    }
  }
})

const deleteWith = (object, path, index = 0) => {
  const paths = path.map ? path : path.split('.')

  if (index + 1 >= paths.length) {
    return delete object[paths[index]]
  }

  return deleteWith(object[paths[index]], paths, ++index)
}

export const setWith = (object, path, value, index = 0) => {
  const paths = path.map ? path : path.split('.')

  if (index + 1 >= paths.length) {
    object[paths[index]] = value
    return object
  } else if (object[paths[index]] === undefined) {
    object[paths[index]] = {}
  }

  return setWith(object[paths[index]], paths, value, ++index)
}

const _setter = (stateValue, payload) => {
  switch (stateValue.constructor) {
    case Object:
      return { ...stateValue, ...payload }
    case Array:
      return [...stateValue, ...payload]
    default:
      return payload
  }
}

export const { setState, cleanup, subscribe, unsubscribe } = actions

export default (baseReducer) =>
  combineReducers({ ...baseReducer, [STATE_NAME]: reducer })
