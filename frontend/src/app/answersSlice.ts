import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface AnswersState {
  byId: Record<number, boolean>
}

const initialState: AnswersState = {
  byId: {}
}

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ id: number; value: boolean }>) => {
      const { id, value } = action.payload;
      state.byId[id] = value;
    },
    resetAnswers: (state) => {
      state.byId = {};
    },
  },
})

export const { setAnswer, resetAnswers } = answersSlice.actions
export default answersSlice.reducer