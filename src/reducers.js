import { createSlice, combineReducers } from '@reduxjs/toolkit'
import { get } from 'lodash'

import { STATE_NAME } from './constants'
import { setWith, getSetter, deleteWith } from './helpers'

const INIT_STATE = {
  redux_state_subscriptions: {}
}

const { actions, reducer } = createSlice({
  name: STATE_NAME,
  initialState: INIT_STATE,
  reducers: {
    setState: (state, { name, payload, reducer }) => {
      setWith(
        state,
        name,
        reducer
          ? reducer(get(state, name), payload)
          : typeof payload === 'function'
          ? payload(get(state, name))
          : getSetter()(get(state, name), payload)
      )
    },

    cleanup: (state, { payload, name }) => {
      get(state, name) && deleteWith(state, name)

      get(state.redux_state_subscriptions, name) &&
        deleteWith(state.redux_state_subscriptions, name)
    },

    subscribe: (state, { payload, name, cleanup, reducer }) => {
      const subscriber_count = get(state.redux_state_subscriptions, name, 0)

      if (payload !== undefined || reducer) {
        setWith(
          state,
          name,
          reducer
            ? reducer(get(state, name), payload)
            : getSetter()(get(state, name), payload)
        )
      }

      if (subscriber_count < 1 || cleanup) {
        setWith(state.redux_state_subscriptions, name, subscriber_count + 1)
      }
    },

    unsubscribe: (state, { payload, name, cleanup }) => {
      const redux_state_subscriptions = state.redux_state_subscriptions

      const subscriber_count = get(state.redux_state_subscriptions, name, 0)

      if (subscriber_count < 2 && cleanup) {
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

export const { setState, cleanup, subscribe, unsubscribe } = actions

export default (baseReducer) =>
  combineReducers({ ...baseReducer, [STATE_NAME]: reducer })
