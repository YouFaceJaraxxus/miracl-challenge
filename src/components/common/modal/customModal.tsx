import Modal from '@mui/material/Modal';
import { ModalBox } from './customModalStyle';
import ICustomModalProps from './customModalProps';

const CustomModal = ({
  children,
  isOpen,
  handleClose,
  backgroundColor,
  showOnTop
}: ICustomModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox sx={{
        backgroundColor: backgroundColor,
        ...(showOnTop && {zIndex: 1000})
      }}>
        {children}
      </ModalBox>
    </Modal>
  );
};

export default CustomModal;