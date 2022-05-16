import IDocument, { DocumentType } from "../../models/document/IDocument";
import { IServiceConfig } from "./service";


export default interface IDocumentService {
  getAllDocuments: (config?: IServiceConfig) => Promise<IGetAllDocumentsResponse>;
  getDocumentById: (id: string) => Promise<IDocument | null>;
  createDocument: (document: ICreateDocument) => Promise<IDocument>;
  updateDocument: (document: IDocument) => Promise<IDocument>;
  patchDocument: (document: IPatchDocument) => Promise<IDocument>;
  deleteDocument: (id: string) => Promise<IDeleteResponse>;
};

interface IGetAllDocumentsResponse{
  count: number,
  documents: IDocument[];
}

interface ICreateDocument {
  name: string;
  type: DocumentType;
  contactId: string;
}

interface IPatchDocument {
  id: string;
  type?: DocumentType;
  contactId?: string;
}

interface IDeleteResponse {
  success: boolean;
}

export type {
  ICreateDocument,
  IPatchDocument,
  IDeleteResponse,
  IGetAllDocumentsResponse,
}