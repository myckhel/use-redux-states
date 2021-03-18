---
id: usage
title: Usage
sidebar_label: Usage
slug: /usage
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
} from 'use-redux-state-hook'

const appReducer = mergeReducers({ yourReducer1, yourReducer2 })

const store = configureStore({
  appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [SET_REDUX_STATE, SUBSCRIBE_REDUX_STATE]
      }
    })
})
setConfig({cleanup: false})
```

## `Basic Usage`

```jsx
import React, { Component } from 'react'

import { useReduxState, useMemoSelector } from 'use-redux-state-hook'

const Usage = () => {
  const { selector, setState } = useReduxState('component_state', {
    /* initial states */
    count: 1,
    locale: 'en_US'
  })

  const { locale, count } = useMemoSelector(selector)

  return (
    <div>
      <h6>Current Count: {count}</h6>
      <input
        onChange={({ target: { value: locale } }) => setState({locale})}
        value={locale}
      />
      <button
        onClick={() =>
          setState((prevState) => ({ ...prevState, count: count + 1 }))
        }
      >
        Increment Count
      </button>
    </div>
  )
}
```
