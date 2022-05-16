import { TextField } from "@mui/material";
import INameDocumentsFilterProps from "./nameDocumentsFilterProps";

const NameDocumentsFilter = ({
  value,
  handleValueChange
}: INameDocumentsFilterProps) => {
  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange(e.target.value);
  }
  return (
    <TextField
      fullWidth
      value={value?? ''}
      onChange={handleTextFieldChange}
      type="text"
      label={'File name'}
      sx={{
        marginTop: '20px',
      }}
    />
  )
}

export default NameDocumentsFilter;