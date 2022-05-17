export default interface IFilterDocumentsModalProps{
  isOpen: boolean;
  handleClose: () => void;
  type: string;
  value: string;
  handleTypeChange: (type: string) => void;
  handleValueChange: (value: string) => void;
  clearFilter: () => void;
};