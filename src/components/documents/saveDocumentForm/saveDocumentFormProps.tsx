import IUser from "../../../models/user/IUser";
import { ICreateUser } from "../../../service/interfaces/IUserService";

export default interface ICreateUserFormProps{
  isOpen: boolean;
  handleClose: () => void;
  initialValues?: IUser;
  type: 'create' | 'update';
  handleFormSubmit: (user: ICreateUser | IUser) => void;
};