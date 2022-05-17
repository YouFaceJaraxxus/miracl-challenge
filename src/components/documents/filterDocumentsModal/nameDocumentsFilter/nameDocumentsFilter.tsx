import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import INameDocumentsFilterProps from "./nameDocumentsFilterProps";

const TEXT_CHANGE_DELAY = 500;
const NameDocumentsFilter = ({
  value,
  handleValueChange
}: INameDocumentsFilterProps) => {
  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const [inputValue, setInputValue] = useState('');
  const [inputChangeTimeout, setInputChangeTimeout] = useState(null);

  useEffect(() => {
    if (inputChangeTimeout) {
      clearTimeout(inputChangeTimeout);
    }
    setInputChangeTimeout(setTimeout(() => {
      console.log('inputValue', inputValue)
      handleValueChange(inputValue);
    }, TEXT_CHANGE_DELAY));
  }, [inputValue])

  //this makes sure that we clear the input value on clear button click
  useEffect(() => {
    if (value === null || value === '') {
      setInputValue('');
    }
  }, [value])

  return (
    <TextField
      fullWidth
      value={inputValue ?? ''}
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