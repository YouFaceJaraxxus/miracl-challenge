import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
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
  const isChecked = (type: string) => value && value.includes(type);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (value.includes(type)) {
      handleValueChange(value.filter((t) => t !== type));
    }else{
      handleValueChange([...value, type]);
    }
    
  }
  return (
    <FormGroup>
      {
        documentTypes.map((docType, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                value={docType.type}
                checked={isChecked(docType.type)}
                onChange={(e) => { handleCheckboxChange(e, docType.type) }} />} label={docType.label} />
        ))
      }
    </FormGroup>
  )
}

export default TypeDocumentsFilter;