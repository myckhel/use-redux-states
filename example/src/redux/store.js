import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
import {
  setConfig,
  SET_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE
} from 'use-redux-states'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [SET_REDUX_STATE, SUBSCRIBE_REDUX_STATE]
      }
    })
})
setConfig({
  store,
  cleanup: true,
  setter: (existingState, payload) => {
    console.log('using custom setter for type ' + typeof state)
    switch (existingState?.constructor) {
      case Object:
        return payload?.constructor === Object
          ? { ...existingState, ...payload }
          : payload
      case Array:
        return payload?.constructor === Array
          ? [...existingState, ...payload]
          : payload
      default:
        return payload
    }
  }
})
export default store
