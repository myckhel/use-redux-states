---
id: use-set-state
title: useSetState
---

This hook gives you a setState function for a given state

## Arguments
### stateName
name of the nestable state to be selected

## Returns
### setState()
```js
setState(payload, setter)
```

## Example
```jsx
import {useEffect} from 'react'
import useReduxState, {useSetState} from 'use-redux-state-hook'
const Component = () => {
  const {selector} = useReduxState({
    state: {
      state1: 'a',
      state2: 'b',
    },
    name: 'component_state'
  })
  const setState = useSetState('component_state')

  useEffect(() => {
    setState({state2: 'c'}, (component_state, payload) => ({...component_state, ...payload}))
     // component_state {state1: 'a', state2: 'c'}
  }, [])
}
```