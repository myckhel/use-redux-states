# use-redux-states

> Create redux state at runtime.

[![NPM](https://img.shields.io/npm/v/use-redux-states.svg)](https://www.npmjs.com/package/use-redux-states) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![test workflow](https://github.com/myckhel/use-redux-states/actions/workflows/eslint.yml/badge.svg)

## Overview
`use-redux-states` allows you to create runtime redux states for your components without explicitly creating actions and reducers.
It was also designed to solve react's unnecessary re-render issue by using `useMemoSelector` api.

It returns object which includes a setState function that uses same concept as react's class component `setState` function which accepts `callback(previous_state)` or new state value.

## Install

```bash
npm install --save use-redux-states
```

## Setup
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
import React from 'react'

import { useReduxState } from 'use-redux-states'

const Usage = () => {
  const { setState, useStateSelector } = useReduxState('component_state', {
    /* initial states */
    count: 1,
    locale: 'en_US'
  })

  const { locale, count } = useStateSelector()

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

# Usage Guides

## **`Creating states`**

Lets create a new state in the redux store at the path named `todos` with initial values of array `{
  1: {done: false},
  2: {done: true},
  3: {done: false}
}`.

```js
import {useReduxState} from 'use-redux-states'

const App = () => {
  useReduxState({
    path: 'todos',
    state: {
      1: {done: false},
      2: {done: true},
      3: {done: false}
    },
  })
  // creates state in the store with key = todos and value = {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: false}
  // }
}
```

### Controlling how initial state should be set
When you use the `redux-state-hook` with a default state, under the hood it sets the initial state in the store with the given path.<br/>
`redux-state-hook` has an intelligent setter function which determines how your state will be set based on the payload **(referring the initial state as the payload)**.
When array is passed as the payload setter assumes you will append the payload with the current state array.<br />
Given the example below the initial todos state has `[{done: false}, {done: true}, {done: false}]` value, setter will push to the existing array state if the payload is array otherwise will replace the state.

```js
import React from 'react'
import useReduxState from 'use-redux-states'

const App = () => {
  // existing todos state = [{done: false}, {done: true}, {done: false}]
  useReduxState({
    path: 'todos',
    state: [
      {done: false},
      {done: true},
      {done: false}
    ],
  })
  // later todos state = [
  //   {done: false},
  //   {done: true},
  //   {done: false}
  // ]
}
```

Same logic applies to json object but [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) payload value replaces the existing state.<br/>
You can handle the setter behaviour by passing a reducer function.

```js
import React from 'react'
import useReduxState from 'use-redux-states'

const App = () => {
  // existing todos state = [{done: false}, {done: true}, {done: false}]
  useReduxState({
    path: 'todos',
    state: [{done: true}],
    reducer: (existingState, payload) => existingState ? [...payload, ...existingState] : payload
    // custom setter function prepends to the existing state
  })
  // later todos state = [{done: true}, {done: false}, {done: true}, {done: false}]
}
```

## **`Retrieving state`**
Lets retrieve the new state we have created using [getState](./website/docs/apis/hooks/use-redux-state#getstate).

```js
import {useReduxState} from 'use-redux-states'

const App = () => {
  const {getState} = useReduxState({
    path: 'todos',
    state: {
      1: {done: false},
      2: {done: true},
      3: {done: false}
    },
  })

  console.log(getState()) // {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: false}
  // }
}
```

### Reactively getting state

We can retrieve states reactively using [useStateSelector](./website/docs/apis/hooks/use-state-selector) or [useGetState](./../apis/hooks/use-get-state) hooks.
```js
import {useReduxState, useGetState} from 'use-redux-states'

const App = () => {
  const {useStateSelector} = useReduxState({
    path: 'todos',
    state: {
      1: {done: false},
      2: {done: true},
      3: {done: false}
    },
  })

  const todos = useStateSelector()

  console.log(todos) // {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: false}
  // }
}
```

### Getting already existing states

In some cases we might want to get an already existsing state without using the [useReduxState](./website/docs/apis/hooks/use-redux-state.md).

```js
import {useGetState} from 'use-redux-states'

const App = () => {
  const getTodos = useGetState('todos')

  const todos = getTodos()

  console.log(todos) // {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: false}
  // }
}
```

### Reactively getting already existing states

We can reactively get already existsing state without using the [useReduxState](./website/docs/apis/hooks/use-redux-state.md).

```js
import {useMemoSelector} from 'use-redux-states'

const App = () => {
  const todo = useMemoSelector('todos.2')

  console.log(todo) // {done: true},
}
```

### Retrieving computed state with callback
We can retrieve and compute states by passing callback function to [useStateSelector](./website/docs/apis/hooks/use-state-selector) hook and or [getState](./website/docs/apis/hooks/use-redux-state#getstate).

```js
import {useReduxState} from 'use-redux-states'

const App = () => {
  const {useStateSelector, getState} = useReduxState({
    path: 'todos',
    state: {
      1: {done: false},
      2: {done: true},
      3: {done: false}
    },
  })

  const todo = useStateSelector((todos) => todos[0])

  const todo2 = getState((todos) => todos[1])

  console.log(todo, todo2) // {done: false},{done: false}
}
```

## **`Updating states`**
We can update states with [setState](./website/docs/apis/hooks/use-redux-state#setstate).
```js
import {useReduxState} from 'use-redux-states'

const App = () => {
  const {setState, getState} = useReduxState({
    path: 'todos',
    state: {
      1: {done: false},
      2: {done: true},
      3: {done: false}
    },
  })

  const makeTodo3Done = () => setState({3: {done: true}})

  makeTodo3Done();
  console.log(getState()) // {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: true}
  // }
}
```

### Updating states with setter callback
We can also update states by passing a custom setter to [setState](./website/docs/apis/hooks/use-redux-state/#setstate).
```js
import {useReduxState} from 'use-redux-states'

const App = () => {
  const {setState, getState} = useReduxState({
    path: 'todos',
    state: {
      1: {done: false},
      2: {done: true},
      3: {done: false}
    },
  })

  const makeTodo3Done = () => setState((todos) => {
    todos.[3].done = true;
    return todos
  })

  makeTodo3Done();
  console.log(getState()) // {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: true}
  // }
}
```

### Updating already existing states
We can update already existing states with [useSetState](./website/docs/apis/hooks/use-set-state) hook.

```js
import {useSetState, useGetState} from 'use-redux-states'

const App = () => {
  const updateThirdTodo = useSetState('todos.3')

  const getTodos = useGetState('todos')

  const makeTodoDone = () => updateThirdTodo({done: true})

  makeTodoDone();
  console.log(getTodos()) // {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: true}
  // }
}
```

### Updating already existing states
We can update already existing states with [useSetState](./website/docs/apis/hooks/use-set-state) hook.

```js
import {useSetState, useGetState} from 'use-redux-states'

const App = () => {
  const updateThirdTodo = useSetState('todos.3')

  const getTodos = useGetState('todos')

  const makeTodoDone = () => updateThirdTodo((todo3) => {
    todo3.done = true;
    return todo3
  })

  makeTodoDone();
  console.log(getTodos()) // {
  //   1: {done: false},
  //   2: {done: true},
  //   3: {done: true}
  // }
}
```

## 📚 Extensive Doc at
[User Redux State Doc](https://myckhel.github.io/use-redux-states/)

## Examples
### 🖥️ React Web Code Sandbox Example
[Code Sandbox Example](https://codesandbox.io/s/usereduxstate-gdl7g)

### React Native Snack Example
[Snack Example](https://snack.expo.dev/@myckhel/use-redux-state-hook)

### React Native Snack GiftedChat Example
[Snack GiftedChat Example](https://snack.expo.dev/@myckhel/react-native-gifted-chat-reply)

## License

MIT © [myckhel](https://github.com/myckhel)
