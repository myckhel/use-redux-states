---
id: use-get-state
title: useGetState()
---

This hook gives you a getState function for a given state

## Arguments

### `stateName`

name of the nestable state to be selected

## Returns

### `getState()`

```js
getState(stateName)
```

## Example

```jsx
import { useEffect } from 'react'
import useReduxState, { useGetState } from 'use-redux-states'
const Component = () => {
  useReduxState({
    state: {
      state1: 'a',
      state2: 'b'
    },
    name: 'component_state'
  })
  const getState = useGetState('component_state')

  useEffect(() => {
    console.log(getState((component_state) => component_state?.state2))
    // 'c'
  }, [])
}
```
