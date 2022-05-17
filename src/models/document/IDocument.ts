export enum DocumentType{
  PDF = 'pdf',
  TXT = 'txt',
  JPG = 'jpg',
  OTHER = 'other',
}

export default interface IDocument {
  id: string;
  name: string;
  type: DocumentType;
  contactId: string;
};