import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import CustomModal from '../../common/modal/customModal';
import IFilterDocumentsModalProps from './filterDocumentsModalProps';
import { FilterDocumentsModalSelect, FilterDocumentsModalWrapper } from './filterDocumentsModalStyles';
import NameDocumentsFilter from './nameDocumentsFilter/nameDocumentsFilter';
import TypeDocumentsFilter from './typeDocumentsFilter/typeDocumentsFilter';

const FilterDocumentsModal = ({
  isOpen,
  handleClose,
  handleTypeChange,
  handleNameValueChange,
  handleTypeValueChange,
  type,
  value,
}: IFilterDocumentsModalProps) => {
  const renderFilterDocumentsModalForm = () => {
    switch (type) {
      case 'type':
        return <TypeDocumentsFilter value={value as string[]} handleValueChange={handleTypeValueChange} />
      default:
        return <NameDocumentsFilter value={value as string} handleValueChange={handleNameValueChange} />
    }
  }

  const handleTypeSelectChange = (e: SelectChangeEvent) => {
    const value = e.target.value as 'type' | 'name';
    handleTypeChange(value);
  }

  return (
    <CustomModal isOpen={isOpen} handleClose={handleClose}>
      <FilterDocumentsModalWrapper>
        <FilterDocumentsModalSelect>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type ?? ""}
              label="Filter by"
              defaultValue={"name"}
              onChange={handleTypeSelectChange}
            >
              <MenuItem value={'name'}>Name</MenuItem>
              <MenuItem value={'type'}>Type</MenuItem>
            </Select>
          </FormControl>
        </FilterDocumentsModalSelect>
        {renderFilterDocumentsModalForm()}
      </FilterDocumentsModalWrapper>
    </CustomModal>
  )
};

export default FilterDocumentsModal;