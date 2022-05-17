import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '../slices/commonSlice';
import userSlice from '../slices/userSlice';
import usersSlice from '../slices/usersSlice';
import documentsSlice from '../slices/documentsSlice';
import documentTypesSlice from '../slices/documentTypesSlice';

const store = configureStore({
  reducer: {
    common: commonSlice,
    user: userSlice,
    users: usersSlice,
    documents: documentsSlice,
    documentTypes: documentTypesSlice,
  },
})
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectCommon = (state: RootState) => state.common;
const selectUser = (state: RootState) => state.user;
const selectUsers = (state: RootState) => state.users;
const selectDocuments = (state: RootState) => state.documents;
const selectDocumentTypes = (state: RootState) => state.documentTypes;

export type{
  RootState,
  AppDispatch,
}

export {
  selectCommon,
  selectUser,
  selectUsers,
  selectDocuments,
  selectDocumentTypes,
}

export default store;