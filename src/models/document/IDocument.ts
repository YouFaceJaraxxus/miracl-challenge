export enum DocumentType{
  PDF = 'pdf',
  TXT = 'txt',
  JPG = 'jpg',
  OTHER = 'other',
  NONE = '',
}

export default interface IDocument {
  id: string;
  name: string;
  type: DocumentType;
  contactId: string;
};