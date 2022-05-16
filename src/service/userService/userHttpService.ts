import { API_BASE_URL } from '../../config/config';
import IUser from '../../models/user/IUser';
import { JSON_SUFFIX } from '../../util/constants';
import HttpService from '../httpService';
import { IAxiosService } from '../interfaces/service';
import IUserService, { ICreateUser, IDeleteResponse, IPatchUser } from '../interfaces/userService';
import { getArrayFromObject } from '../../util/util';

const USERS_BASE_URL = 'users';

class UserHttpService implements IUserService {
  constructor(baseUrl?: string) {
    this.service = new HttpService(`${baseUrl || API_BASE_URL}${USERS_BASE_URL}`);
  }
  service: IAxiosService;
  getAllUsers = async (): Promise<IUser[]> => getArrayFromObject(await this.service.get(JSON_SUFFIX).then(response => response.data));
  getUserById = (id: string): Promise<IUser> => this.service.get(`/${id}${JSON_SUFFIX}`).then(response => response.data);
  createUser = (user: ICreateUser): Promise<IUser> => this.service.post(`${JSON_SUFFIX}`, user).then(response => response.data);
  updateUser = (user: IUser): Promise<IUser> => this.service.put(`/${user.id}${JSON_SUFFIX}`, user).then(response => response.data);
  patchUser = (user: IPatchUser): Promise<IUser> => this.service.patch(`/${user.id}${JSON_SUFFIX}`, user).then(response => response.data);
  deleteUser = async (id: string): Promise<IDeleteResponse> => {
    try {
      await this.service.delete(`/${id}${JSON_SUFFIX}`);
      return { success: true }
    } catch (error) {
      return { success: false }
    }
  }
}

const userHttpService = new UserHttpService();

export {
  userHttpService,
};