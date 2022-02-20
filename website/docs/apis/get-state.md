---
id: get-state
title: getState()
---

function to get the state for a given state path.

## `Arguments`

### **statePath**

path of the nest-able state to be selected

```js
getState(store, statePath, getter?: (state) => selectedState)
```

## `Returns`

### **stateValue**

```js
getState(store, 'todos.completed', (state) => state.todos) // any value
```

## `Example`

```jsx
import { useEffect } from 'react'
import useReduxState, { getState } from 'use-redux-states'
const Component = () => {
  useReduxState({
    state: {
      state1: [],
    },
    path: 'todos.completed'
  })

  useEffect(() => {
    console.log(getState(store, 'todos.completed', (state) => state.todos))
    // {state1: []}
  }, [])
}
```
