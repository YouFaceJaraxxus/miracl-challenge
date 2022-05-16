export default interface ICustomModalProps{
  children?: JSX.Element;
  showOnTop?: boolean;
  backgroundColor?: string;
  isOpen: boolean;
  handleClose: () => void;
}