---
id: use-get-state
title: useGetState()
---

This hook gives you a getState function for a given state

## Arguments

### `statePath`

path of the nestable state to be selected

## Returns

### `getState()`

```js
getState(statePath)
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
    path: 'component_state'
  })
  const getState = useGetState('component_state')

  useEffect(() => {
    console.log(getState((component_state) => component_state?.state2))
    // 'c'
  }, [])
}
```
