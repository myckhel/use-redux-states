import { get, isArray } from 'lodash'
import { SET_REDUX_STATE, STATE_NAME } from './constants'
import libConfig from './config'
import { Dispatch, ReducersMapObject, Store } from '@reduxjs/toolkit'
import {
  ReduxStateActionCreator,
  ReduxStatePath,
  ReduxStateReducer
} from './types'

/**
 * returns a given state
 * @param  {any} state selected redux state
 * @return {any}      selected redux state
 */
export const sel = (state: any) => state

/**
 * generates unique state path
 * @return {number}      generated unique state path
 */
export const unique = () => new Date().getTime()

/**
 * get state for the given state
 * @param  {object} store redux store
 * @param  {string} path redux state path
 * @param  {function} callback function that accepts selected state
 * @return {any}      redux state
 */
export const getState = (store: Store, path: string, callback = sel) =>
  callback(selector(store?.getState(), path))

/**
 * set state for the given state
 * @param  {function} dispatch redux store dispatcher
 * @param  {function} action redux action creator
 * @param  {any} payload value to set in the redux state
 * @param  {function} reducer function that recieve the current state and which should return new state
 */
export const setState = <T>(
  dispatch: Dispatch,
  action: ReduxStateActionCreator,
  payload: T,
  reducer?: ReduxStateReducer
) => dispatch(action(payload, reducer))

/**
 * creates redux set state action
 * @param  {string} path redux state path
 * @param  {any} payload any value or function that returns any value
 * @param  {function} reducer function that recieve the current state and which should return new state
 */
export const action = <T>(
  path: string,
  payload: T,
  reducer?: ReducersMapObject
) => ({
  type: SET_REDUX_STATE,
  payload,
  path,
  reducer
})

/**
 * selects state for the given state path
 * @param  {any} state redux state
 * @param  {string} path redux state path
 * @return {any}      selected redux state
 */
export const selector = (state: any, path: string) =>
  get(state?.[STATE_NAME], path)

/**
 * gets user defined setter function or package's setter function
 * @return {function}      redux state setter
 */
export const getSetter = () => libConfig.setter || _setter

/**
 * delete object property at the given nested path
 * @param  {object} object object to delete property from
 * @param  {string} path path to nested property to delete
 * @param  {number} index index to start delete from based on size of path
 */
export const deleteWith = (
  object: Object,
  path: string | Array<string>,
  index = 0
): boolean => {
  // if path is not array then split path with .
  const paths = isArray(path) ? path : path.split('.')

  // if at the object's property and delete
  if (index + 1 >= paths.length) {
    return delete object[paths[index]]
  }

  // try to delete propery from the next index
  return deleteWith(object[paths[index]], paths, ++index)
}

/**
 * set object property at the given nested path
 * @param  {object} object object to set its property
 * @param  {string} path path to nested property to set
 * @param  {any} value value to set at the object path
 * @param  {number} index index to start setting property from based on size of path
 * @return  {object}    set object
 */
export const setWith = <T>(
  object: Object,
  path: ReduxStatePath,
  value: T,
  index = 0
): T => {
  // if path is not array then split path with .
  const paths = isArray(path) ? path : path.split('.')

  // if at the object's property and set
  if (index + 1 >= paths.length) {
    object[paths[index]] = value
    return value
    // current object property path is undefined
  } else if (object[paths[index]] === undefined) {
    // set undefined path as empty object
    object[paths[index]] = {}
  }

  // try to set propery from the next index
  return setWith(object[paths[index]], paths, value, ++index)
}

/**
 * intellegent redux state setter
 * @param  {any} existingState existng state
 * @param  {any} payload value to set
 * @return  {any}    new state
 */
export const _setter = (existingState: any, payload: any): any => {
  switch (existingState?.constructor) {
    case Object:
      return payload?.constructor === Object
        ? { ...existingState, ...payload }
        : payload
    case Array:
      return payload?.constructor === Array
        ? [...existingState, ...payload]
        : payload
    default:
      return payload
  }
}
