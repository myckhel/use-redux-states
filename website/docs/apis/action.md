---
id: action
title: action
---

This creates redux action for a given state.
```
action(stateName, payload, setter)
```

## Returns
Redux action

## Example

```jsx
import {useEffect} from 'react'
import useReduxState, {action} from 'use-redux-state-hook'
const Component = () => {
  useReduxState({
    state: {
      state1: 'a',
      state2: 'b',
    },
    name: 'component_state'
  })

  useEffect(() => {
    store.dispatch(action(
      'component_state',
      {state2: 'c'},
      (component_state, payload) => ({...component_state, ...payload})
    ))
    // component_state {state1: 'a', state2: 'c'}
  }, [])
}
```
