import IUser from '../../models/user/IUser';

export default interface IUserService {
  getAllUsers: () => Promise<IUser[]>;
  getUserById: (id: string) => Promise<IUser|null>;
  createUser: (user: ICreateUser) => Promise<IUser>;
  updateUser: (user: IUser) => Promise<IUser>;
  patchUser: (user: IPatchUser) => Promise<IUser>;
  deleteUser: (id: string) => Promise<IDeleteResponse>;
};

interface ICreateUser{
  name: string;
  lastName: string;
}

interface IPatchUser{
  id: string;
  name?: string;
  lastName?: string;
}

interface IDeleteResponse{
  success: boolean;
}

export type {
  ICreateUser,
  IPatchUser,
  IDeleteResponse,
}