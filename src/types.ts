import { Action } from '@reduxjs/toolkit'

export type StateSelectorPath = string | ((state: any) => any)

export interface ReduxStateConfig {
  cleanup?: boolean
  setter?: (state: any, payload: any) => any
}

export interface ReduxStateProps {
  name?: string
  state?: any
  unmount?: boolean
  cleanup?: boolean
  reducer?: boolean
}

export type ReduxStateReducer = (state: any, payload?: any) => any

export type ReduxStateActionCreator = (
  payload: any,
  reducer?: ReduxStateReducer
) => Action

export type ReduxStatePath = string | Array<string>

export interface ReduxStateAction {
  name: string
  payload: any
  reducer?: ReduxStateReducer
  type?: string
  cleanup?: boolean
}
