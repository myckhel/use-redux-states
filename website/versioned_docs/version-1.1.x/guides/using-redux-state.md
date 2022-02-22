---
id: using-redux-state
title: Using redux state
---

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
Lets retrieve the new state we have created using [getState](../apis/hooks/use-redux-state#getstate).

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

We can retrieve states reactively using [useStateSelector](./../apis/hooks/use-state-selector) or [useGetState](./../apis/hooks/use-get-state) hooks.
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

In some cases we might want to get an already existsing state without using the [useReduxState](./../apis/hooks/use-redux-state.md).

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

We can reactively get already existsing state without using the [useReduxState](./../apis/hooks/use-redux-state.md).

```js
import {useMemoSelector} from 'use-redux-states'

const App = () => {
  const todo = useMemoSelector('todos.2')

  console.log(todo) // {done: true},
}
```

### Retrieving computed state with callback
We can retrieve and compute states by passing callback function to [useStateSelector](./../apis/hooks/use-state-selector) hook and or [getState](../apis/hooks/use-redux-state#getstate).

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
We can update states with [setState](../apis/hooks/use-redux-state#setstate).
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
We can also update states by passing a custom setter to [setState](../apis/hooks/use-redux-state/#setstate).
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
We can update already existing states with [useSetState](./../apis/hooks/use-set-state) hook.

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
We can update already existing states with [useSetState](./../apis/hooks/use-set-state) hook.

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
