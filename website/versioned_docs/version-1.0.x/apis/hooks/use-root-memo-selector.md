---
id: use-root-memo-selector
title: useRootMemoSelector()
---

This hook is similar to [useMemoSelector](./use-memo-selector.md) but it select state from the root store.
### What is the root store?
Root store is the main store of your app.

Given your app store `{...yourAppStates}` the package adds state to the store named `_use_redux_state` so at the end,  your app store looks like `{...yourAppStates, _use_redux_state: {...}}`.

[useMemoSelector](./use-memo-selector.md) only selects state in `_use_redux_state` path, incase you need to select state outside the `_use_redux_state` path, then you will need to use `useRootMemoSelector` hook.


## Arguments

### `selector()||statePath''`

#### `selector()`

function that selects from the state.
receives 1 argument

```
(storeState) => selectedState
```

#### `stateName`

path of the nestable state to be selected

### `result()`

function that returns the result of the selected state

```
(selectedState) => selectedState
```

### `equality()`

function that compare prevState against newState to determine if selected state has changed. defaults to [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)

## Example

```jsx
import { useRootMemoSelector } from 'use-redux-states'

// store: {state: {userName: 'mike'}, _use_redux_state: {}}

const Component = () => {
  const state = useRootMemoSelector('state')
  const userName = useRootMemoSelector('state.userName')

  console.log({ state, userName })
  // {{state: {userName: 'mike'}, userName: 'mike'}
}
```
