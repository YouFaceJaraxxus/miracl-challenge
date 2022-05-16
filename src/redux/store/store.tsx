import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../slices/counterSlice';
import commonSlice from '../slices/commonSlice';
import userSlice from '../slices/userSlice';
import usersSlice from '../slices/usersSlice';
import documentsSlice from '../slices/documentsSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    common: commonSlice,
    user: userSlice,
    users: usersSlice,
    documents: documentsSlice,
  },
})
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectCount = (state: RootState) => state.counter;
const selectCommon = (state: RootState) => state.common;
const selectUser = (state: RootState) => state.user;
const selectUsers = (state: RootState) => state.users;
const selectDocuments = (state: RootState) => state.documents;

export type{
  RootState,
  AppDispatch,
}

export {
  selectCount,
  selectCommon,
  selectUser,
  selectUsers,
  selectDocuments,
}

export default store;