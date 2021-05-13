---
id: usage
title: Usage
sidebar_label: Usage
slug: /usage
---


## Setup
```js
import yourReducer1 from './yourReducer1';
import yourReducer2 from './yourReducer2';
import {createStore} from 'redux';
import { setStore, mergeReducers } from 'use-redux-states'

const appReducer = mergeReducers({yourReducer1, yourReducer2});

const store = createStore(appReducer);
setStore(store);
```

## Basic Usage

```jsx
import React, { Component } from 'react'

import {useReduxState, useMemoSelector} from 'use-redux-states'

const Usage = () => {
  const {selector, setState} = useReduxState('component_state', {
    /* initial states */
    count: 1,
    locale: 'en_US'
  });

  const {locale, count} = useMemoSelector(selector);

  return (
    <div>
      <h6>Current Count: {count}</h6>
      <input onChange={({target:{value: locale}}) => setState((prevState) => ({...prevState, locale}))} value={locale} />
      <button onClick={() => setState((prevState) => ({...prevState, count: count + 1}))}>Increment Count</button>
    </div>
  )
}
```
