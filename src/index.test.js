import mergeReducers, { subscribe } from './reducers'
import { SUBSCRIBE_REDUX_STATE, SET_REDUX_STATE } from './constants'
// {
//   cleanup,
//   unsubscribe
// }
import {
  setWith,
  sel,
  getState,
  setState,
  action as setStateAction,
  selector
} from './helpers'

const _reducer = (state = { state: { count: 1 } }, { type, payload }) => {
  if (type === 'countState') {
    return { ...state, count: payload }
  } else {
    return state
  }
}

/***********/
import { configureStore } from '@reduxjs/toolkit'
import { setConfig } from './config'

const store = configureStore({
  reducer: mergeReducers(_reducer)
})
setConfig({ cleanup: true })
/***********/

describe('Reducers Units', () => {
  test('should merge reducers and reduce state', () => {
    const state = mergeReducers(_reducer)(
      {
        _use_redux_state: {
          redux_state_subscriptions: {}
        }
      },
      { type: '_use_redux_state/subscribe', payload: 1, name: 'nested.state' }
    )
    expect(state).toEqual({
      _use_redux_state: {
        redux_state_subscriptions: {
          nested: { state: 1 }
        },
        nested: { state: 1 }
      }
    })
  })
})

describe('actions', () => {
  it('should create subscribe action', () => {
    expect(subscribe()).toEqual({
      type: SUBSCRIBE_REDUX_STATE,
      payload: undefined
    })
  })
})

describe('helpers', () => {
  const stateName = 'user.name'
  const payload = 'michael'
  const action = (payload) => setStateAction(stateName, payload)
  const userState = { user: { name: 'michael' } }
  setState(store.dispatch, action, payload)

  it('should set nested object', () => {
    const obj = {}
    setWith(obj, stateName, 'michael')
    expect(obj).toEqual(userState)
  })

  it('should return its arg', () => expect(sel(userState)).toEqual(userState))

  it('should create setState action', () =>
    expect(setStateAction(stateName, payload)).toEqual({
      type: SET_REDUX_STATE,
      payload,
      name: stateName
    }))

  it('should select state from store', () =>
    expect(selector(store.getState(), stateName)).toEqual(payload))

  it('should set and get state in store', () =>
    expect(getState(store, stateName)).toEqual(payload))
})
