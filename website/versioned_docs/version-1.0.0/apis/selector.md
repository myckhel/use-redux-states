---
id: selector
title: selector()
---

function to select state for a given state name.
```js
selector(storeRootState, stateName)
```

**Returns** Redux state for the given name

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
    name: 'component_state'
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
