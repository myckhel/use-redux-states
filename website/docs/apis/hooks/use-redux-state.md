---
id: use-redux-state
title: useReduxState
---
This hook allows to create redux state at runtime.

```ts
useReduxState(stateName?: string, state?: any)
```
or
```js
useReduxState(config?: {
  name?: 'string', // nested state name
  state?: any, // initial state
  reducer?: (storeState, initialState) => mergedState
})
```

#### `returns`
```js
{
  selector, setState, getState, action, cleanup, useMemoSelector
}
```

## `config`

### name''
nestable key name of the redux state
```js
useReduxState({name: 'state.name', state: 'Mike'});
// creates nested state in the store {state: {name: 'Mike'}}
```

### state?
initial state
```js
useReduxState({name: 'state.name', state: 'Mike'});
// creates nested state in the store {state: {name: 'Mike'}}
```

### reducer()?
function that takes the current `state` for the given name, `payload` and returns computed new state.
this function runs once during the initialization of the state
use the function when you want to manually handle how the state should be created/updated.

```js
useReduxState({name: 'state.name', state: {is: 'Mike'}});
// {state: {name: {is: 'Mike'}}}

useReduxState({
  name: 'state.name',
  state: {and: 'Redux'},
  reducer: (currentState, payload) => ({...currentState, ...payload})
});
```
in the above example
reducer had prevented from over-writing the store state when there is an existing value for the state.
instead of:
```js
{state: {name: {and: 'Redux'}}}
```
we got:
```js
{state: {name: {is: 'Mike', and: 'Redux'}}}
```

### unmount?.
**type:** boolean
**default:** false

determines whether redux state should mount
```js
useReduxState({unmount: true, name: 'state.name', state: 'Mike'});
// store undefined
useReduxState({unmount: false, name: 'state.name', state: 'Mike'});
// {state: {name: 'Mike'}}
```

### cleanup?.
**type:** boolean
<!-- **default:** false -->

determines whether redux state should cleanup the state when component unmounted from view.

```js
const {getState} = useReduxState({cleanup: true, name: 'state.name', state: 'Mike'});

useEffect(() => {
  console.log(getState()) // {state: {name: 'Mike'}}
  return () => console.log(getState()) // undefined
}, [])
```

## `Example`
```js
const {selector, setState} = useReduxState({
  name: 'state.name',
  state: {
    count: 1,
    locale: 'en_US'
  }
});
```
