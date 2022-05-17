export default interface INameDocumentsFilterProps{
  value: string;
  handleValueChange: (type: 'name' | 'type', value: string) => void; 
};