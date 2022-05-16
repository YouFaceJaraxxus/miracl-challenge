import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const INCREMENT_STEP = 1;

interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    subtract: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    increment: (state) => {
      state.count += INCREMENT_STEP;
    },
    decrement: (state) => {
      state.count -= INCREMENT_STEP;
    },
  },
})

export const {
  add,
  subtract,
  increment,
  decrement,
} = counterSlice.actions;

export default counterSlice.reducer; 