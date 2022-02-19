import mergeReducers, {
  setState as setStateAction,
  cleanup as cleanupAction,
  subscribe as subscribeAction,
  unsubscribe as unsubscribeAction
} from './reducers'
import {
  SUBSCRIBE_REDUX_STATE,
  SET_REDUX_STATE,
  UNSUBSCRIBE_REDUX_STATE,
  CLEANUP_REDUX_STATE
} from './constants'
import config, { setConfig } from './config'
import {
  setWith,
  sel,
  unique,
  getState,
  setState,
  action as setStateActionCreator,
  selector,
  _setter
} from './helpers'

import { ActionFromReducer, configureStore } from '@reduxjs/toolkit'

const ROOT_STATE = { count: 1, userName: 'mike' }

const stateReducer = (
  state = ROOT_STATE,
  { type, payload }: ActionFromReducer<{}>
) => {
  if (type === 'countState') {
    return { ...state, count: payload }
  } else {
    return state
  }
}

const store = configureStore({
  reducer: mergeReducers({ state: stateReducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [SET_REDUX_STATE, SUBSCRIBE_REDUX_STATE]
      }
    })
})

export { store, ROOT_STATE }

describe('Config Units', () => {
  it('should set the lib configuration', () => {
    const _config = { cleanup: true, setter: _setter }
    setConfig(_config)
    expect(_config).toEqual(config)
  })
})

describe('Reducers Units', () => {
  test('should merge reducers and reduce state', () => {
    const state = mergeReducers(stateReducer)(
      {
        _use_redux_state: {
          redux_state_subscriptions: {}
        }
      },
      { type: '_use_redux_state/subscribe', payload: 1, path: 'nested.state' }
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
  const createActionFor = (name: string) => ({
    type: name,
    payload: undefined
  })

  it('should create subscribe action', () =>
    expect(subscribeAction(undefined)).toEqual(
      createActionFor(SUBSCRIBE_REDUX_STATE)
    ))

  it('should create setState action', () =>
    expect(setStateAction(undefined)).toEqual(createActionFor(SET_REDUX_STATE)))

  it('should create unsubscribe action', () =>
    expect(unsubscribeAction(undefined)).toEqual(
      createActionFor(UNSUBSCRIBE_REDUX_STATE)
    ))

  it('should create cleanup action', () =>
    expect(cleanupAction(undefined)).toEqual(
      createActionFor(CLEANUP_REDUX_STATE)
    ))
})

describe('helpers', () => {
  const stateName = 'user.name'
  const payload = 'michael'
  const action = (payload: string) => setStateActionCreator(stateName, payload)
  const userState = { user: { name: 'michael' } }
  setState(store.dispatch, action, payload)

  it('should set nested object', () => {
    const obj = {}
    setWith(obj, stateName, 'michael')
    expect(obj).toEqual(userState)
  })

  it('should return its given argument', () =>
    expect(sel(userState)).toEqual(userState))

  it('should generate unique number from current time', () => {
    const expects = unique()
    const toBe = new Date().getTime()
    expect((expects - (expects % 100)) / 100).toBe((toBe - (toBe % 100)) / 100)
  })

  it('should create setState action', () =>
    expect(setStateActionCreator(stateName, payload)).toEqual({
      type: SET_REDUX_STATE,
      payload,
      path: stateName
    }))

  it('should select state from store', () =>
    expect(selector(store.getState(), stateName)).toEqual(payload))

  it('should get state in store', () =>
    expect(getState(store, stateName)).toEqual(payload))

  describe('_setter', () => {
    const existingState = undefined
    const obj = { foo: 'bar' }
    const barObj = { bar: 'baz' }
    const mergedObj = { foo: 'bar', bar: 'baz' }
    const arr = ['foo']
    const append = ['bar']
    const appendedArr = ['foo', 'bar']
    const primitive = 1

    it('should replace existing primitive state with object', () =>
      expect(_setter(existingState, obj)).toEqual(obj))

    it('should merge existing object state with object', () =>
      expect(_setter(obj, barObj)).toEqual(mergedObj))

    it('should replace existing object state with array', () =>
      expect(_setter(mergedObj, arr)).toEqual(arr))

    it('should append to existing array state with array', () =>
      expect(_setter(arr, append)).toEqual(appendedArr))

    it('should replace existing array state with primitive value', () =>
      expect(_setter(appendedArr, primitive)).toEqual(primitive))
  })
})
