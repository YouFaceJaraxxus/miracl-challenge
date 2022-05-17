import IUser from '../../models/user/IUser';
import { ILocalStorageService } from '../interfaces/service';
import IUserService, { ICreateUser, IDeleteResponse, IPatchUser } from '../interfaces/userService';
import LocalStorageService from '../localStorageService';

const USERS_BASE_URL = 'users';

class UserLocalStorageService implements IUserService {
  constructor() {
    this.service = new LocalStorageService();
  }
  service: ILocalStorageService;
  getAllUsers = (): Promise<IUser[]> => this.service.get(USERS_BASE_URL);
  getUserById = async (id: string): Promise<IUser | null> => {
    const users = await this.getAllUsers();
    if (users) {
      for (let user of users) {
        if (user.id === id) return user;
      }
    }
    return null;
  }
  createUser = (user: ICreateUser): Promise<IUser> => this.service.post(USERS_BASE_URL, user);
  updateUser = (user: IUser): Promise<IUser> => this.service.put(USERS_BASE_URL, user);
  patchUser = (user: IPatchUser): Promise<IUser> => this.service.patch(USERS_BASE_URL, user);
  deleteUser = (id: string): Promise<IDeleteResponse> => this.service.delete(USERS_BASE_URL, { filter: { id } });
}

const userLocalStorageService = new UserLocalStorageService();

export {
  userLocalStorageService,
};