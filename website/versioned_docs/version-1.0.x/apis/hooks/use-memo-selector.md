---
id: use-memo-selector
title: useMemoSelector()
---

This hook allows to select redux state efficiently and in a memoized way.
it uses [createSelector](https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc) to make sure selector is not recomputed unless one of its arguments changes.
it also uses [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare) to prevent unnecessary updates.

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
import useReduxState, { useMemoSelector } from 'use-redux-states'
const Component = () => {
  const { selector } = useReduxState({
    state: {
      state1: 'a',
      state2: 'b'
    },
    path: 'component_state'
  })
  const state1 = useMemoSelector(
    selector,
    (component_state) => component_state?.state1
  )
  const state2 = useMemoSelector('component_state.state2')

  console.log({ state1, state2 }) // {state1: 'a', state2: 'b'}
}
```
