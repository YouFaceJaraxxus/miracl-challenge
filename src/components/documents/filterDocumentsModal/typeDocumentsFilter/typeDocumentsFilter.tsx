import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DocumentType } from "../../../../models/document/IDocument";
import { getEnumKeyArray } from "../../../../util/util";
import ITypeDocumentsFilterProps from "./typeDocumentsFilterProps";

const TypeDocumentsFilter = ({
  value,
  handleValueChange,
}: ITypeDocumentsFilterProps) => {
  const handleTypeSelectValueChange = (e: SelectChangeEvent) => {
    const value = e.target.value;
    handleValueChange(value);
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
          getEnumKeyArray(DocumentType).map((key, index) => (
            <MenuItem key={index} value={key}>{key}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

export default TypeDocumentsFilter;