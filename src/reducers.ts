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
    // @ts-ignore
    setState: <S = any>(
      state: any,
      { path, payload, reducer }: ReduxStateAction<S>
    ) => {
      setWith(
        state,
        path,
        reducer
          ? reducer(get(state, path), payload)
          : typeof payload === 'function'
          ? payload(get(state, path))
          : getSetter()(get(state, path), payload)
      )
    },

    // @ts-expect-error
    cleanup: (state, { path }: ReduxStateAction): void => {
      get(state, path) && deleteWith(state, path)

      get(state.redux_state_subscriptions, path) &&
        deleteWith(state.redux_state_subscriptions, path)
    },
    // @ts-expect-error
    subscribe: (
      state,
      { payload, path, cleanup, reducer }: ReduxStateAction
    ) => {
      const subscriber_count = get(state.redux_state_subscriptions, path, 0)

      if (payload !== undefined || reducer) {
        setWith(
          state,
          path,
          reducer
            ? reducer(get(state, path), payload)
            : getSetter()(get(state, path), payload)
        )
      }

      if (subscriber_count < 1 || cleanup) {
        setWith(state.redux_state_subscriptions, path, subscriber_count + 1)
      }
    },

    // @ts-expect-error
    unsubscribe: (state, { path, cleanup }: ReduxStateAction) => {
      const redux_state_subscriptions = state.redux_state_subscriptions

      const subscriber_count = get(state.redux_state_subscriptions, path, 0)

      if (subscriber_count < 2 && cleanup) {
        if (get(state, path)) {
          deleteWith(state, path)
        }

        if (get(redux_state_subscriptions, path)) {
          deleteWith(redux_state_subscriptions, path)
        }
      } else {
        setWith(state.redux_state_subscriptions, path, subscriber_count - 1)
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
