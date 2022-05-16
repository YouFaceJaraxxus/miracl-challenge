import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IDocument from '../../models/document/IDocument';
import { documentHttpService as documentService } from '../../service/documentService/documentHttpService';
import { ICreateDocument, IDeleteResponse, IPatchDocument } from '../../service/interfaces/documentService';
import { getArrayFromObject } from '../../util/util';

interface DocumentsState {
  documents: IDocument[] | undefined;
  fetchingDocuments: boolean;
  savingDocument: boolean;
  deletingDocument: boolean;
}

const initialState: DocumentsState = {
  documents: undefined,
  fetchingDocuments: false,
  savingDocument: false,
  deletingDocument: false,
};

export const getDocumentsAsync = createAsyncThunk(
  'documents/getDocuments',
  async (): Promise<IDocument[]> => {
    const response = await documentService.getAllDocuments();
    return response;
  },
);

export const getDocumentByIdAsync = createAsyncThunk(
  'documents/getDocumentById',
  async (id: string): Promise<IDocument | null> => {
    const response = await documentService.getDocumentById(id);
    return response;
  },
);

export const createDocumentAsync = createAsyncThunk(
  'documents/createDocument',
  async (document: ICreateDocument): Promise<IDocument> => {
    const response = await documentService.createDocument(document);
    return response;
  },
);

export const patchDocumentAsync = createAsyncThunk(
  'documents/patchDocument',
  async (document: IPatchDocument): Promise<IDocument> => {
    const response = await documentService.patchDocument(document);
    return response;
  },
);

export const deleteDocumentAsync = createAsyncThunk(
  'documents/deleteDocument',
  async (id: string): Promise<IDeleteResponse> => {
    const response = await documentService.deleteDocument(id);
    return response;
  },
);



const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDocumentsAsync.pending, (state) => {
        state.fetchingDocuments = true;
      })
      .addCase(getDocumentsAsync.fulfilled, (state, action) => {
        state.documents = getArrayFromObject(action.payload);
        state.fetchingDocuments = false;
      })
      .addCase(getDocumentsAsync.rejected, (state) => {
        state.fetchingDocuments = false;
      })

      .addCase(createDocumentAsync.pending, (state) => {
        state.savingDocument = true;
      })
      .addCase(createDocumentAsync.fulfilled, (state, action) => {
        state.documents = [...(state.documents ?? []), {
          id: action.payload.name,
          ...action.meta.arg,
        }]
        state.savingDocument = false;
      })
      .addCase(createDocumentAsync.rejected, (state) => {
        state.savingDocument = false;
      })

      .addCase(patchDocumentAsync.pending, (state) => {
        state.savingDocument = true;
      })
      .addCase(patchDocumentAsync.fulfilled, (state, action) => {
        state.documents = state.documents?.map((document) => {
          if (document.id === action.meta.arg.id) {
            //spread old user and overwrite data with new updated user's spread data
            return {
              ...document,
              ...action.payload
            };
          }
          else return document;
        });
        state.savingDocument = false;
      })
      .addCase(patchDocumentAsync.rejected, (state) => {
        state.savingDocument = false;
      })

      .addCase(deleteDocumentAsync.pending, (state) => {
        state.deletingDocument = true;
      })
      .addCase(deleteDocumentAsync.fulfilled, (state, action) => {
        state.documents = state.documents?.filter((document) => document.id !== action.meta.arg);
        state.deletingDocument = false;
      })
      .addCase(deleteDocumentAsync.rejected, (state) => {
        state.deletingDocument = false;
      })
  },
});

export default documentsSlice.reducer;
