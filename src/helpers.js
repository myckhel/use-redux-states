import { get } from 'lodash'
import { SET_REDUX_STATE, STATE_NAME } from './constants'
export const sel = (state) => state

export const unique = () => new Date().getTime()

export const isString = (val) => typeof val === 'string'

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

export const selector = (state, name) => get(state?.[STATE_NAME], name)
