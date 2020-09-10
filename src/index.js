import React from 'react'
import styles from './styles.module.css'

import store, { setStore } from './store'
import useStateReducer from './useStateReducer'
import { useReduxState } from './hooks'

export { setStore, useStateReducer, useReduxState }

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
