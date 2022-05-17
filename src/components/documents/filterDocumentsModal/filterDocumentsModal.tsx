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
  handleValueChange,
  type,
  value,
}: IFilterDocumentsModalProps) => {
  const renderFilterDocumentsModalForm = () => {
    switch (type) {
      case 'type':
        return <TypeDocumentsFilter value={value} handleValueChange={handleValueChange} />
      default:
        return <NameDocumentsFilter value={value} handleValueChange={handleValueChange} />
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
            <InputLabel id="type-select-label">Filter by</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
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