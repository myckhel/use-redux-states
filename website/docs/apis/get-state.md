---
id: get-state
title: getState()
---

function to get the state for a given state name.

## `Arguments`

### **stateName**

name of the nest-able state to be selected

```js
getState(store, stateName, getter?: (state) => selectedState)
```

## `Returns`

### **stateValue**

```js
getState(store, 'todos.completed', (state) => state.todos) // any value
```

## `Example`

```jsx
import { useEffect } from 'react'
import useReduxState, { getState } from 'use-redux-state-hook'
const Component = () => {
  useReduxState({
    state: {
      state1: [],
    },
    name: 'todos.completed'
  })

  useEffect(() => {
    console.log(getState(store, 'todos.completed', (state) => state.todos))
    // {state1: []}
  }, [])
}
```
