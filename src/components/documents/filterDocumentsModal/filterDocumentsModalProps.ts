export default interface IFilterDocumentsModalProps{
  isOpen: boolean;
  handleClose: () => void;
  type: 'name' | 'type';
  value: string | string[];
  handleTypeChange: (type: 'name' | 'type') => void;
  handleNameValueChange: (value: string) => void; 
  handleTypeValueChange: (value: string[]) => void; 
};