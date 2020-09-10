import React from 'react'
import styles from './styles.module.css'

import store, { setStore } from './store'
import { useReduxState } from './hooks'
import useStateCombineReducers from './useStateCombineReducers'

export { setStore, useReduxState, useStateCombineReducers }

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
