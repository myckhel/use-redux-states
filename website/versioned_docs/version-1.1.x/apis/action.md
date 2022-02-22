---
id: action
title: action()
---

Action creator for dispatching setState action for a given state path.

```ts
action(statePath, payload, setter?: (state, payload) => newState)
```

## `Returns`

setState redux action

```ts
action(statePath, payload, setter)
// { type: SET_REDUX_STATE, payload, path, reducer }
```

## `Example`

```jsx
import { useEffect } from 'react'
import useReduxState, { action } from 'use-redux-states'
const Component = () => {
  useReduxState({
    state: {
      state1: 'a',
      state2: 'b'
    },
    path: 'component_state'
  })

  useEffect(() => {
    store.dispatch(
      action(
        'component_state',
        { state2: 'c' },
        (component_state, payload) => ({ ...component_state, ...payload })
      )
    )
    // component_state {state1: 'a', state2: 'c'}
  }, [])
}
```
