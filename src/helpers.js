import { get } from 'lodash'
import { SET_REDUX_STATE, STATE_NAME } from './constants'
import libConfig from './config'

/**
 * returns a given state
 * @param  {any} state selected redux state
 * @return {any}      selected redux state
 */
export const sel = (state) => state

/**
 * generates unique state name
 * @return {number}      generated unique state name
 */
export const unique = () => new Date().getTime()

/**
 * determines if a given value is string
 * @return {boolean}      true or false
 */
export const isString = (val) => typeof val === 'string'

/**
 * get state for the given state
 * @param  {object} store redux store
 * @param  {string} name redux state name
 * @param  {function} callable function that accepts selected state
 * @return {any}      redux state
 */
export const getState = (store, name, callable = sel) =>
  callable(get(store?.getState()?.[STATE_NAME], name))

/**
 * set state for the given state
 * @param  {function} dispatch redux store dispatcher
 * @param  {function} action redux action creator
 * @param  {any} payload value to set in the redux state
 * @param  {function} reducer function that recieve the current state and which should return new state
 */
export const setState = (dispatch, action, payload, reducer) =>
  dispatch(action(payload, reducer))

/**
 * creates redux set state action
 * @param  {string} name redux state name
 * @param  {any} payload any value or function that returns any value
 * @param  {function} reducer function that recieve the current state and which should return new state
 */
export const action = (name, payload, reducer) => ({
  type: SET_REDUX_STATE,
  payload,
  name,
  reducer
})

/**
 * selects state for the given state name
 * @param  {object} state redux state
 * @param  {string} name redux state name
 * @return {any}      selected redux state
 */
export const selector = (state, name) => get(state?.[STATE_NAME], name)

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
export const deleteWith = (object, path, index = 0) => {
  // if path is not array then split path with .
  const paths = path.map ? path : path.split('.')

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
 * @param  {number} index index to start setting property from based on size of path
 * @return  {object}    set object
 */
export const setWith = (object, path, value, index = 0) => {
  // if path is not array then split path with .
  const paths = path.map ? path : path.split('.')

  // if at the object's property and set
  if (index + 1 >= paths.length) {
    object[paths[index]] = value
    return object
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
 * @param  {object} existingState existng state
 * @param  {any} payload value to set
 * @return  {any}    new state
 */
export const _setter = (existingState, payload) => {
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
