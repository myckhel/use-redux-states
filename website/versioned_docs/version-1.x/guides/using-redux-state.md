---
id: using-redux-state
title: using redux state
---

```js
import React from 'react'
import useReduxState from 'use-redux-states'

const App = () => {
  useReduxState({
    name: 'todos',
    state: [1,2,3],
  })
  // creates state in the store with key = todos and value = [1,2,3]
}
```
## controlling how initial state should be set
When you use the `redux-state-hook` with a default state, under the hood it sets the initial state in the store with the given name.<br/>
`redux-state-hook` has an intelligent setter function which determines how your state will be set based on the payload **(referring the initial state as the payload)**.
When array is passed as the payload setter assumes you will append the payload with the current state array.<br />
Given the example below the initial todos state has `[1,2]` value, setter will push to the existing array state if the payload is array otherwise will replace the state.
```js
import React from 'react'
import useReduxState from 'use-redux-states'

const App = () => {
  // existing todos state = [1,2]
  useReduxState({
    name: 'todos',
    state: [3],
  })
  // later todos state = [1,2,3]
}
```
Same logic applies to json object but [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) payload value replaces the existing state.<br/>
You can handle the setter behaviour by passing a reducer function.
```js
import React from 'react'
import useReduxState from 'use-redux-states'

const App = () => {
  // existing todos state = [1,2]
  useReduxState({
    name: 'todos',
    state: [3],
    reducer: (existingState, payload) => existingState ? [...payload, ...existingState] : payload
    // custom setter function prepends to the existing state
  })
  // later todos state = [3,1,2]
}
```
