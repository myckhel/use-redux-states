import {createSlice, combineReducers} from '@reduxjs/toolkit';

import {
  STATE_NAME
} from './constants'

import storage from './store'

const INIT_STATE = {
  redux_state_subscriptions: {}
}

const {actions, reducer} = createSlice({
  name: STATE_NAME,
  initialState: INIT_STATE,
  reducers: {
    setState: (state, {name, payload}) => {
      state[name] = typeof payload === 'function'
        ? payload(state[name])
        : payload
    },

    cleanup: (state, {payload, name}) => {
      if (state[name]) {
        delete state[name]
      }
      if (state.redux_state_subscriptions[name]) {
        delete state.redux_state_subscriptions[name]
      }
    },

    subscribe: (state, {payload, name}) => {
      const subscribed_count = state.redux_state_subscriptions[name] || 0

      state.redux_state_subscriptions[name] = subscribed_count + 1

      if (payload !== undefined) {
        state[name] = payload
      }
    },

    unsubscribe: (state, {payload, name}) => {
      const redux_state_subscriptions = state.redux_state_subscriptions

      const subscriber_count =
        state.redux_state_subscriptions[name] || 0

      if (subscriber_count < 2) {
        if (storage?.config?.cleanup) {
          if (state[name]) {
            delete state[name]
          }

          if (redux_state_subscriptions[name]) {
            delete redux_state_subscriptions[name]
          }
        }
      }
    }
  },
});

export const {setState, cleanup, subscribe, unsubscribe} = actions

export default (baseReducer) =>
  combineReducers({ ...baseReducer, [STATE_NAME]: reducer })
