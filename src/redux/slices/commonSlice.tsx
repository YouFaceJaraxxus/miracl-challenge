import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ERROR } from '../../util/constants';

interface ICommon {
  theme: string;
  showSnackbar: boolean;
  snackbarText: string;
  snackbarType: string;
}

const initialState: ICommon = {
  theme: 'light',
  showSnackbar: true,
  snackbarText: 'HELLOOOsdjnfjidsbuifbdshufbdsyfdsbhfsd',
  snackbarType: ERROR,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    openSnackbar: (state, action) => {
      state.showSnackbar = true;
      state.snackbarText = action.payload.text;
      state.snackbarType = action.payload.type;
    },
    closeSnackbar: (state) => {
      state.showSnackbar = false;
      state.snackbarText = '';
      state.snackbarType = '';
    },
  },
})

export const {
  setTheme,
  openSnackbar,
  closeSnackbar,
} = commonSlice.actions;

export default commonSlice.reducer; 