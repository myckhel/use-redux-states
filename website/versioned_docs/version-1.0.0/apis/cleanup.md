---
id: cleanup
title: cleanup()
---

function that dispatches an action to delete the state from redux store.
useful when you dont want to persist the state when component unmounted.

*function is provided by `use-redux-state-hook`*

```js
cleanup()
```

## `Example`

```jsx
import { useEffect } from 'react'
import useReduxState from 'use-redux-state-hook'
const Component = () => {

  const {cleanup} = useReduxState({
    state: {
      state1: 'a',
      state2: 'b'
    },
    name: 'component_state'
  })

  useEffect(() => {
    return () => cleanup()
    /* component_state: undefined */
  }, [])
}
```
