import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SUCCESS } from '../../util/constants';

interface ISnackbarConfig {
  showSnackbar: boolean;
  snackbarText: string;
  snackbarType: 'success' | 'error';
}

interface ICommon {
  theme: string;
  snackbarConfig: ISnackbarConfig;
}



const initialState: ICommon = {
  theme: 'light',
  snackbarConfig: {
    showSnackbar: false,
    snackbarText: '',
    snackbarType: SUCCESS,
  }
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    openSnackbar: (state, action: PayloadAction<ISnackbarConfig>) => {
      state.snackbarConfig = action.payload;
    },
    closeSnackbar: (state) => {
      state.snackbarConfig = {
        showSnackbar: false,
        snackbarText: '',
        snackbarType: SUCCESS,
      }
    },
  },
})

export const {
  setTheme,
  openSnackbar,
  closeSnackbar,
} = commonSlice.actions;

export default commonSlice.reducer; 