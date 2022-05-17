export default interface IFilterDocumentsModalProps{
  isOpen: boolean;
  handleClose: () => void;
  type: 'name' | 'type';
  value: string;
  handleTypeChange: (type: 'name' | 'type') => void;
  handleValueChange: (type: 'name' | 'type', value: string) => void;
};