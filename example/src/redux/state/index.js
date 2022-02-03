import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE = { count: 0, userName: 'mike' }

const { reducer, actions } = createSlice({
  name: 'state',
  initialState: INIT_STATE,
  reducers: {
    increaseCount: (state) => {
      state.count = state.count + 1
    }
  }
})

export const { increaseCount } = actions

export default reducer
