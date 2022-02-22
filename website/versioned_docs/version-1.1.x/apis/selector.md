---
id: selector
title: selector()
---

function to select state for a given state path.
```js
selector(storeRootState, statePath)
```

**Returns** Redux state for the given path

## `Example`

```jsx
import {useEffect} from 'react'
import useReduxState, {selector} from 'use-redux-states'

const Component = () => {
  useReduxState({
    state: {
      state1: 'a',
      state2: 'b',
    },
    path: 'component_state'
  })

  useEffect(() => {
    selector(
      store.getState(),
      'component_state',
    )
    // component_state {state1: 'a', state2: 'b'}
  }, [])
}
```
