import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IDocumentType from '../../models/documentType/IDocumentType';
import { documentTypeHttpService as documentTypeService } from '../../service/documentTypeService/documentTypeHttpService';

interface DocumentTypesState {
  documentTypes: IDocumentType[] | undefined;
  fetchingDocumentTypes: boolean;
}

const initialState: DocumentTypesState = {
  documentTypes: undefined,
  fetchingDocumentTypes: false,
};

export const getDocumentTypesAsync = createAsyncThunk(
  'documentTypes/getDocumentTypes',
  async (): Promise<IDocumentType[]> => {
    const response = await documentTypeService.getAllDocumentTypes();
    return response;
  },
);


const documentsSlice = createSlice({
  name: 'documentTypes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDocumentTypesAsync.pending, (state) => {
        state.fetchingDocumentTypes = true;
      })
      .addCase(getDocumentTypesAsync.fulfilled, (state, action) => {
        state.documentTypes = action.payload;
      })
      .addCase(getDocumentTypesAsync.rejected, (state) => {
        state.fetchingDocumentTypes = false;
      })
  },
});

export default documentsSlice.reducer;
