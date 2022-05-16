import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICommon {
  theme: string;
}

const initialState: ICommon = {
  theme: 'light',
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
})

export const {
  setTheme
} = commonSlice.actions;

export default commonSlice.reducer; 