import { Action } from '@reduxjs/toolkit'

export type StateSelectorPath = ReduxStatePath | ((state: any) => any)

export interface ReduxStateConfig {
  cleanup?: boolean
  setter?: (state: any, payload: any) => any
}

export interface ReduxStateProps<State = any> {
  name?: ReduxStatePath
  path?: ReduxStatePath
  state?: State
  unmount?: boolean
  cleanup?: boolean
  reducer?: boolean
}

export type ReduxStateReducer = (state: any, payload?: any) => any

export type ReduxStateActionCreator = (
  payload: any,
  reducer?: ReduxStateReducer
) => Action

export type ReduxStateSetWithPath = string | Array<string>

export interface ReduxStateAction {
  path: string
  payload: any
  reducer?: ReduxStateReducer
  type?: string
  cleanup?: boolean
}

export type ReduxStatePath = string
