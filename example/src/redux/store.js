import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
import {
  setConfig,
  SET_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE
} from 'use-redux-state-hook'

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
  cleanup: true,
  setter: (state, payload) => {
    console.log('using custom setter for type '+(typeof state));
    switch (typeof state) {
      case 'object':
        return { ...state, ...payload }
      case 'array':
        return [...state, ...payload]
      default:
        return payload
    }
  }
})
export default store
