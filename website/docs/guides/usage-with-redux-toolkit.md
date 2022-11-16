---
id: usage-with-redux-toolkit
title: Usage With Redux Toolkit
sidebar_label: Usage With Redux Toolkit
slug: /usage-with-redux-toolkit
---

## `Setup`

```js
import { configureStore } from '@reduxjs/toolkit'
import yourReducer1 from './yourReducer1'
import yourReducer2 from './yourReducer2'
import {
  setConfig,
  mergeReducers,
  SET_REDUX_STATE,
  SUBSCRIBE_REDUX_STATE
} from 'use-redux-states'

const appReducer = mergeReducers({ yourReducer1, yourReducer2 })

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [SET_REDUX_STATE, SUBSCRIBE_REDUX_STATE]
      }
    })
})
setConfig({cleanup: false})
```
