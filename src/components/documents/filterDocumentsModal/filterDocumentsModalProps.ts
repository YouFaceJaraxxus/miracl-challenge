export default interface IFilterDocumentsModalProps{
  isOpen: boolean;
  handleClose: () => void;
  initialValue: string | string[];
  type: 'name' | 'type';
  filterValue: string | string[];
  handleTypeChange: () => void;
  handleValueChange: (value: string | string[]) => void; 
};