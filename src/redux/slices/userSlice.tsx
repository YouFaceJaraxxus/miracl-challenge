import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  isLogged: boolean;
  checkedIsLoggedIn: boolean;
}

const initialState: IUser = {
  isLogged: false,
  checkedIsLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
      state.checkedIsLoggedIn = true;
    },
    setCheckedIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
})

export const {
  setIsLogged,
  setCheckedIsLogged,
} = userSlice.actions;

export default userSlice.reducer; 