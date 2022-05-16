import IConfirmModalProps from './confirmModalProps';
import CustomModal from '../customModal';
import { ButtonsWrapper, CancelButton, ConfirmButton, ConfirmModalTitle, ConfirmModalWrapper } from './confirmModalStyle';
import { useTheme } from '@mui/material/styles';

const ConfirmModal = ({
  isOpen,
  handleClose,
  handleAccept,
  title,
  severity
}: IConfirmModalProps) => {
  const theme = useTheme();
  return (
    <CustomModal
      isOpen={isOpen}
      handleClose={handleClose}
      backgroundColor={severity === 'success'? theme.palette.success.light : theme.palette.error.light}
    >
      <ConfirmModalWrapper>
        <ConfirmModalTitle>
          {title}
        </ConfirmModalTitle>
        <ButtonsWrapper>
          <ConfirmButton severity={severity} onClick={() => handleAccept()}>
            Confirm
          </ConfirmButton>
          <CancelButton onClick={handleClose}>
            Cancel
          </CancelButton>
        </ButtonsWrapper>
      </ConfirmModalWrapper>
    </CustomModal>
  );
};

export default ConfirmModal;