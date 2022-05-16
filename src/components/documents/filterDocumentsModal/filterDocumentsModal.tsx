import CustomModal from '../../common/modal/customModal';
import IFilterDocumentsModalProps from './filterDocumentsModalProps';
import { FilterDocumentsModalWrapper } from './filterDocumentsModalStyles';
import NameDocumentsFilter from './nameDocumentsFilter/nameDocumentsFilter';
import TypeDocumentsFilter from './typeDocumentsFilter/typeDocumentsFilter';

const FilterDocumentsModal = ({
  isOpen,
  handleClose,
  handleTypeChange,
  handleValueChange,
  type,
  initialValue,
}: IFilterDocumentsModalProps) => {
  const renderFilterDocumentsModalForm = () =>{
    switch(type){
      case 'type' : 
        return <TypeDocumentsFilter />
      default: 
        return <NameDocumentsFilter />
    }
  }
  return (
    <CustomModal isOpen={isOpen} handleClose={handleClose}>
      <FilterDocumentsModalWrapper>
        {renderFilterDocumentsModalForm()}
      </FilterDocumentsModalWrapper>
    </CustomModal>
  )
};

export default FilterDocumentsModal;