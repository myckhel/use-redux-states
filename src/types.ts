import { Action, AnyAction, EnhancedStore } from '@reduxjs/toolkit'
import { Primitive } from 'lodash'

export type ReduxStatePath = string

export type StateSelector<S = any, Ret = any> = (state: S) => Ret

export type StateSelectorPath<S = any, Ret = any> =
  | ReduxStatePath
  | StateSelector<S, Ret>

export interface ReduxStateConfig {
  cleanup?: boolean
  setter?: (state: any, payload: any) => any
  store?: EnhancedStore<any, AnyAction, never[]>
}

export type ReduxStateSetter<S = any, Ret = any> = (state: S) => Ret

export interface ReduxStateProps<State = any> {
  name?: ReduxStatePath
  path?: ReduxStatePath
  state?: State | ((state: State) => Partial<State>)
  unmount?: boolean
  cleanup?: boolean
  reducer?: boolean
}

export type ReduxSetStatePayload<S> = Partial<S> | ReduxStateSetter

export type ReduxStateReducer<S = any, Ret = any> = (
  state: S,
  payload?: any
) => Ret

export type ReduxStateActionCreator = (
  payload: any,
  reducer?: ReduxStateReducer
) => Action

export type ReduxStateSetWithPath = string | Array<string>

export interface ReduxStateAction<S = any, Ret = any> {
  path: string
  payload: ReduxStateSetter<S, Ret> | Primitive<any> | Object
  reducer?: ReduxStateReducer<S, Ret>
  type?: string
  cleanup?: boolean
}

export type IsEqual = <A = any, B = any>(a: A, b: B) => boolean
