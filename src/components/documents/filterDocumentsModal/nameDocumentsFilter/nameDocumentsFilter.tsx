import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import INameDocumentsFilterProps from './nameDocumentsFilterProps';

const TEXT_CHANGE_DELAY = 500;
const NameDocumentsFilter = ({
  value,
  handleValueChange
}: INameDocumentsFilterProps) => {
  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const [alreadyFetched, setAlreadyFetched] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [inputChangeTimeout, setInputChangeTimeout] = useState(null);

  //we need to skip the first fetch on "inputValue" change so we use the "alreadyFetched" as a flag.
  useEffect(() => {
    if (!alreadyFetched) {
      setAlreadyFetched(true);
    }
    else {
      if (inputChangeTimeout) {
        clearTimeout(inputChangeTimeout);
      }
      setInputChangeTimeout(setTimeout(() => {
        handleValueChange(inputValue);
      }, TEXT_CHANGE_DELAY));
    }
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