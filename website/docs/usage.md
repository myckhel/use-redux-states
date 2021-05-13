---
id: usage
title: Usage
sidebar_label: Usage
slug: /usage
---

## `Setup`

```js
import { createStore } from 'redux'
import yourReducer1 from './yourReducer1'
import yourReducer2 from './yourReducer2'
import { setConfig, mergeReducers } from 'use-redux-states'

const appReducer = mergeReducers({ yourReducer1, yourReducer2 })

const store = createStore(appReducer)
setConfig({cleanup: false})
```

## `Basic Usage`

```jsx
import React, { Component } from 'react'

import { useReduxState, useMemoSelector } from 'use-redux-states'

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
