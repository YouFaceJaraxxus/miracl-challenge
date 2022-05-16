import IDocument from '../../../models/document/IDocument';
import { ICreateDocument } from '../../../service/interfaces/documentService';

export default interface ISaveDocumentFormProps{
  isOpen: boolean;
  handleClose: () => void;
  initialValues?: IDocument;
  type: 'create' | 'update';
  handleFormSubmit: (user: ICreateDocument | IDocument) => void;
};