---
id: cleanup
title: cleanup()
---

function that dispatches an action to delete the state from redux store.
useful when you dont want to persist the state when component unmounted.

*function is provided by `use-redux-states`*

```js
cleanup()
```

## `Example`

```jsx
import { useEffect } from 'react'
import useReduxState from 'use-redux-states'
const Component = () => {

  const {cleanup} = useReduxState({
    state: {
      state1: 'a',
      state2: 'b'
    },
    path: 'component_state'
  })

  useEffect(() => {
    return () => cleanup()
    /* component_state: undefined */
  }, [])
}
```
