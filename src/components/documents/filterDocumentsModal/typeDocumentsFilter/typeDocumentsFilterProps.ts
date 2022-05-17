export default interface ITypeDocumentsFilterProps{
  value: string;
  handleValueChange: (type: 'name' | 'type', value: string) => void; 
};