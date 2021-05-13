# use-redux-state-hook

> :warning: **This package has been renamed to `use-redux-states`**: Please install [use-redux-states](https://github.com/myckhel/use-redux-states) instead!

> Create runtime redux state

[![NPM](https://img.shields.io/npm/v/use-redux-state-hook.svg)](https://www.npmjs.com/package/use-redux-state-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview
`use-redux-state-hook` allows you to create runtime redux states for your components without explicitly creating actions and reducers.
It was also designed to solve react's unnecessary re-render issue by using `useMemoSelector` api.

It returns object which includes a setState function that uses same concept as react's class component `setState` function which accepts `callback(previous_state)` or new state value.

## Install

```bash
npm install --save use-redux-state-hook
```

## Setup
```js
import { createStore } from 'redux'
import yourReducer1 from './yourReducer1'
import yourReducer2 from './yourReducer2'
import { setConfig, mergeReducers } from 'use-redux-state-hook'

const appReducer = mergeReducers({ yourReducer1, yourReducer2 })

const store = createStore(appReducer)
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
## Extensive Doc at
[User Redux State Doc](https://myckhel.github.io/use-redux-state-hook/)

## Example
### React Web Code Sandbox Example
[Code Sandbox Example](https://codesandbox.io/s/usereduxstate-gdl7g)

### React Native Snack Example
[Snack Example](https://snack.expo.io/@myckhel/use-redux-state-hook)

### React Native Snack GiftedChat Example
[Snack GiftedChat Example](https://snack.expo.io/@myckhel/react-native-gifted-chat-reply)

## License

MIT © [myckhel](https://github.com/myckhel)
