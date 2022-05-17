import ICustomModalProps from '../customModalProps';

export default interface IConfirmModalProps extends ICustomModalProps{
  title: string;
  handleAccept: Function;
  severity: 'success' | 'error';
};