---
id: set-config
title: setConfig()
---

function to configure the `use-redux-state-hook`.

## `config objects`

### **cleanup.**

boolean value to determine if the state should be deleted when all component that subscribed to a state name have been unmounted from react tree.
**_this is experimental_**

### **setter()?**

function to replace the initial `use-redux-state-hook` setter function.

## `Example`

```js
import { setConfig } from 'use-redux-state-hook'
setConfig({
  cleanup: false,
  setter: (stateValue, payload) => {
    switch (stateValue?.constructor) {
      case Object:
        return { ...stateValue, ...payload }
      case Array:
        return [...stateValue, ...payload]
      default:
        return payload
    }
  }
})
```
