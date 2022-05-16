import IDocument, { DocumentType } from "../../models/document/IDocument";


export default interface IDocumentService {
  getAllDocuments: () => Promise<IDocument[]>;
  getDocumentById: (id: string) => Promise<IDocument|null>;
  createDocument: (document: ICreateDocument) => Promise<IDocument>;
  updateDocument: (document: IDocument) => Promise<IDocument>;
  patchDocument: (document: IPatchDocument) => Promise<IDocument>;
  deleteDocument: (id: string) => Promise<IDeleteResponse>;
};

interface ICreateDocument{
  name: string;
  type: DocumentType;
  contactId: string;
}

interface IPatchDocument{
  id: string;
  type?: DocumentType;
  contactId?: string;
}

interface IDeleteResponse{
  success: boolean;
}

export type {
  ICreateDocument,
  IPatchDocument,
  IDeleteResponse,
}