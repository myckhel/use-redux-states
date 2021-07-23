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
// {
//   cleanup,
//   unsubscribe
// }
import {
  setWith,
  sel,
  isString,
  unique,
  getState,
  setState,
  action as setStateActionCreator,
  selector,
  _setter
} from './helpers'

/***********/
import { configureStore } from '@reduxjs/toolkit'

const _reducer = (state = { state: { count: 1 } }, { type, payload }) => {
  if (type === 'countState') {
    return { ...state, count: payload }
  } else {
    return state
  }
}

const store = configureStore({
  reducer: mergeReducers(_reducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [SET_REDUX_STATE, SUBSCRIBE_REDUX_STATE]
      }
    })
})

export { store }
/***********/

describe('Config Units', () => {
  it('should set the lib configuration', () => {
    const _config = { cleanup: true, setter: _setter }
    setConfig(_config)
    expect(_config).toEqual(config)
  })
})

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
  const createActionFor = (name) => ({
    type: name,
    payload: undefined
  })

  it('should create subscribe action', () =>
    expect(subscribeAction()).toEqual(createActionFor(SUBSCRIBE_REDUX_STATE)))

  it('should create setState action', () =>
    expect(setStateAction()).toEqual(createActionFor(SET_REDUX_STATE)))

  it('should create unsubscribe action', () =>
    expect(unsubscribeAction()).toEqual(
      createActionFor(UNSUBSCRIBE_REDUX_STATE)
    ))

  it('should create cleanup action', () =>
    expect(cleanupAction()).toEqual(createActionFor(CLEANUP_REDUX_STATE)))
})

describe('helpers', () => {
  const stateName = 'user.name'
  const payload = 'michael'
  const action = (payload) => setStateActionCreator(stateName, payload)
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

  describe('isString', () => {
    it('should determine if string is a string', () =>
      expect(isString('1')).toBe(true))

    it('should determine if object is a string', () =>
      expect(isString({})).toBe(false))
  })

  it('should create setState action', () =>
    expect(setStateActionCreator(stateName, payload)).toEqual({
      type: SET_REDUX_STATE,
      payload,
      name: stateName
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
