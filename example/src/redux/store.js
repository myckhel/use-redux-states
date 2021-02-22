import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'
import {
  setStore,
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
setStore(store, { cleanup: true })
export default store
