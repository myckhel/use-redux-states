---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

## `Overview`
`use-redux-states` allows you to create redux states at runtime for your react components without creating static actions and reducers.
It was also designed to solve react's unnecessary re-render issue by using `useMemoSelector` api and to improve your app's performance.

## `Problems solved`
### **handles unnecessary selectors re-rendering**
`use-redux-states` makes sure selectors doesn't re-render component when state has no changes.
### **reduces redux code boilerplate**
Say bye to redux action/reducers boilerplates!<br />
with redux, before you create states you have to at least define the store in advance in a similar way to example below.

## `Example`
```js
// reducer.js
const INIT_STATE = {
  state1: 'one',
  state2: 'two',
};

const reducer = (state = INIT_STATE, {type, payload}) => {
  switch (type) {
    case 'addState1':
      return {...state, state1: 'ones'}
    default:
      case 'addState2':
        return {...state, state2: 'twos'}
    default:
      return state;
  }
};
export default reducer;
```
Sometimes you would need to move your small react components states to redux store, so for every components state you would have to define them in advance.<br />
This can be redundant and unnecessary.<br />
But `use-redux-states` found a way to create redux state much easier and dynamically without writing redundant codes.<br />
`use-redux-states` can make you have similar states above with few lines of codes.
```jsx
const Component = () => {
  const {setState, getState} = useReduxState({
    name: 'component_state',
    state: {
      state1: 'one',
      state2: 'two',
    }
  });

  useEffect(() => {
    console.log(getState()) // {state1: 'one', state2: 'two'}

    setState({
      state1: 'ones',
      state2: 'twos',
    });
    console.log(getState()) // {state1: 'ones', state2: 'twos'}
  }, [])
}
```
