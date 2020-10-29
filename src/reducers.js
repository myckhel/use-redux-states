import { combineReducers } from 'redux'

import {
  SET_REDUX_STATE,
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE,
  STATE_NAME
} from './constants'

const INIT_STATE = {}

const merge = (obj, obj2) => Object.assign({}, obj, obj2)

const reducer = (state = INIT_STATE, { type, payload, name }) => {
  switch (type) {
    case SET_REDUX_STATE:
      return merge(state, { [name]: typeof payload === 'function' ? payload(state[name]) : payload })
    case UNSUBSCRIBE_REDUX_STATE:
      const redux_state_subscriptions = state?.redux_state_subscriptions

      const subscriber_count = state?.redux_state_subscriptions?.[name] || 0

      if (subscriber_count < 2) {
        if (state && state[name]) {
          delete state[name]
        }

        if (redux_state_subscriptions && redux_state_subscriptions[name]) {
          delete redux_state_subscriptions[name]
        }
        return { ...state }
      } else {
        return merge(state, {
          redux_state_subscriptions: merge(
            state?.redux_state_subscriptions || {},
            {
              [name]: subscriber_count - 1
            }
          )
        })
      }
    case SUBSCRIBE_REDUX_STATE:
      const subscribed_count = state?.redux_state_subscriptions?.[name] || 0

      return merge(state, {
        redux_state_subscriptions: merge(
          state?.redux_state_subscriptions || {},
          {
            [name]: subscribed_count + 1
          }
        )
      })
    case CLEANUP_REDUX_STATE:
      if (state && state[name]) {
        delete state[name]
      }
      if (
        state?.redux_state_subscriptions &&
        state.redux_state_subscriptions[name]
      ) {
        delete state.redux_state_subscriptions?.[name]
      }
      return { ...state }
    default:
      return state
  }
}

export default (baseReducer) =>
  combineReducers({ ...baseReducer, [STATE_NAME]: reducer })
