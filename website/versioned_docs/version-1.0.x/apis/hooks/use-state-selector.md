---
id: use-state-selector
title: useStateSelector()
---

This hook allows to select redux state efficiently and in a memoized way.
it uses [createSelector](https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc) to make sure selector is not recomputed unless one of its arguments changes.
it also uses [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare) to prevent unnecessary updates.

## Arguments

### `result()`

function that returns the result of the selected state

```
(selectedState) => selectedState
```

### `equality()`

function that compare prevState against newState to determine if selected state has changed. defaults to [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)

## Example

```jsx
import useReduxState from 'use-redux-states'
const Component = () => {
  const { useStateSelector } = useReduxState({
    state: {
      name: 'john',
      age: 22
    },
    path: 'users.john'
  })
  const age = useStateSelector(
    (users) => users?.john?.age
  )

  console.log({ age }) // {age: 22}
}
```
