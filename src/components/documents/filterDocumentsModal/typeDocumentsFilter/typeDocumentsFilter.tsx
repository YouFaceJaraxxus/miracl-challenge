import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DocumentType } from "../../../../models/document/IDocument";
import ITypeDocumentsFilterProps from "./typeDocumentsFilterProps";

interface IFileType {
  type: string;
  label: string;
};

const documentTypes = [
  {
    type: DocumentType.PDF,
    label: DocumentType.PDF
  },
  {
    type: DocumentType.TXT,
    label: DocumentType.TXT
  },
  {
    type: DocumentType.JPG,
    label: DocumentType.JPG
  },
  {
    type: DocumentType.OTHER,
    label: DocumentType.OTHER
  },
] as IFileType[]

const TypeDocumentsFilter = ({
  value,
  handleValueChange,
}: ITypeDocumentsFilterProps) => {
  const handleTypeSelectValueChange = (e: SelectChangeEvent) => {
    const value = e.target.value;
    handleValueChange('type', value);
  }
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
          documentTypes.map((dType, index) => (
            <MenuItem key={index} value={dType.type}>{dType.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default TypeDocumentsFilter;