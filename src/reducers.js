import { combineReducers } from 'redux'

import {
  SET_REDUX_STATE,
  UNSUBSCRIBE_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE,
  STATE_NAME
} from './constants'

import storage from './store'

const INIT_STATE = {}

const merge = (obj, obj2) => Object.assign({}, obj, obj2)

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_REDUX_STATE:
      return merge(state, {
        [action.name]:
          typeof action.payload === 'function'
            ? action.payload(state[action.name])
            : action.payload
      })
    case UNSUBSCRIBE_REDUX_STATE:
      const redux_state_subscriptions = state?.redux_state_subscriptions

      const subscriber_count =
        state?.redux_state_subscriptions?.[action.name] || 0

      if (subscriber_count < 2) {
        if (storage?.config?.cleanup) {
          if (state?.[action.name]) {
            delete state[action.name]
          }

          if (redux_state_subscriptions?.[action.name]) {
            delete redux_state_subscriptions[action.name]
          }
        }
        return { ...state }
      } else {
        return merge(state, {
          redux_state_subscriptions: merge(
            state?.redux_state_subscriptions || {},
            {
              [action.name]: subscriber_count - 1
            }
          )
        })
      }
    case SUBSCRIBE_REDUX_STATE:
      const subscribed_count =
        state?.redux_state_subscriptions?.[action.name] || 0

      const newState = {
        redux_state_subscriptions: merge(
          state?.redux_state_subscriptions || {},
          {
            [action.name]: subscribed_count + 1
          }
        )
      }

      if (action.payload !== undefined) {
        newState[action.name] = action.payload
      }

      return merge(state, newState)
    case CLEANUP_REDUX_STATE:
      if (state?.[action.name]) {
        delete state[action.name]
      }
      if (state?.redux_state_subscriptions?.[action.name]) {
        delete state.redux_state_subscriptions?.[action.name]
      }
      return { ...state }
    default:
      return state
  }
}

export default (baseReducer) =>
  combineReducers({ ...baseReducer, [STATE_NAME]: reducer })
