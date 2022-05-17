import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useAppSelector } from '../../../../redux/store/hooks';
import { selectDocumentTypes } from '../../../../redux/store/store';
import ITypeDocumentsFilterProps from './typeDocumentsFilterProps';

const TypeDocumentsFilter = ({
  value,
  handleValueChange,
}: ITypeDocumentsFilterProps) => {
  const handleTypeSelectValueChange = (e: SelectChangeEvent) => {
    const value = e.target.value;
    handleValueChange(value);
  }

  const { documentTypes } = useAppSelector(selectDocumentTypes);

  return (
    <FormControl fullWidth
      sx={{
        marginTop: '20px',
      }}>
      <InputLabel id="type-value-select-label">Type</InputLabel>
      <Select
        labelId="type-value-select-label"
        id="type-value-select"
        value={value ?? ""}
        label="Filter by"
        defaultValue={""}
        onChange={handleTypeSelectValueChange}
      >
        {
          documentTypes?.map((dType, index) => (
            <MenuItem key={index} value={dType.key}>{dType.value}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default TypeDocumentsFilter;