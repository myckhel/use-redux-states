import {
  createSlice,
  combineReducers,
  Reducer,
  CombinedState
} from '@reduxjs/toolkit'
import { get } from 'lodash'

import { STATE_NAME } from './constants'
import { setWith, getSetter, deleteWith } from './helpers'
import { ReduxStateAction } from './types'

const INIT_STATE = {
  redux_state_subscriptions: {}
}

const { actions, reducer } = createSlice({
  name: STATE_NAME,
  initialState: INIT_STATE,
  reducers: {
    // @ts-expect-error
    setState: (state, { name, payload, reducer }: ReduxStateAction) => {
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

    // @ts-expect-error
    cleanup: (state, { name }: ReduxStateAction): void => {
      get(state, name) && deleteWith(state, name)

      get(state.redux_state_subscriptions, name) &&
        deleteWith(state.redux_state_subscriptions, name)
    },
    // @ts-expect-error
    subscribe: (
      state,
      { payload, name, cleanup, reducer }: ReduxStateAction
    ) => {
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

    // @ts-expect-error
    unsubscribe: (state, { name, cleanup }: ReduxStateAction) => {
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

const mergeReducers: CombinedState<any> = (baseReducer: Reducer) => {
  baseReducer[STATE_NAME] = reducer
  return combineReducers(baseReducer)
}

export default mergeReducers
