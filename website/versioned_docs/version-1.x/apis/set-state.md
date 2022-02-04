---
id: set-state
title: setState()
---

function to dispatch set state action.

## `Arguments`

### **storeDispatcher()**

redux store's dispatch function.

### **action()**

a state's set state action creator.

### **payload**

value to set in the state.

### **setter()?**

function to determine how the state should be set.

```js
setState(store.dispatch, action, payload, setter?: (state, payload) => newState)
```

## `Example`

```jsx
import { useEffect } from 'react'
import useReduxState, { setState } from 'use-redux-states'
const Component = () => {
  const { action } = useReduxState({
    state: {
      state1: []
    },
    name: 'todos.completed'
  })

  useEffect(() => {
    console.log(
      setState(store.dispatch, action, [1], (state, payload) => [
        ...state,
        payload
      ])
    )
    // {state1: [1]}
  }, [])
}
```
