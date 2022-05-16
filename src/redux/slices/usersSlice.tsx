import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IUser from '../../models/user/IUser';
import { ICreateUser, IDeleteResponse } from '../../service/interfaces/userService';
import { getArrayFromObject } from '../../util/util';

//feel free to toggle between these two imports: that's the power I wanted to display using all that boiler plate code in the services
//another example would be by using the NODE_ENV variable to differentiate between production/development and other environments
//to do this, we can import both the userHttpService and the userLocalStorageService and assign them (conditionally) to a const variable
import { userHttpService as userService } from '../../service/userService/userHttpService';
//import { userLocalStorageService as userService } from '../../service/userService/userLocalStorageService';

interface UsersState {
  users: IUser[] | undefined;
  fetchingUsers: boolean;
  savingUser: boolean;
  deletingUser: boolean;
}

const initialState: UsersState = {
  users: undefined,
  fetchingUsers: false,
  savingUser: false,
  deletingUser: false,
};

export const getUsersAsync = createAsyncThunk(
  'users/getUsers',
  async (): Promise<IUser[]> => {
    const response = await userService.getAllUsers();
    return response;
  },
);

export const getUserByIdAsync = createAsyncThunk(
  'users/getUserById',
  async (id: string): Promise<IUser | null> => {
    const response = await userService.getUserById(id);
    return response;
  },
);

export const createUserAsync = createAsyncThunk(
  'users/createUser',
  async (user: ICreateUser): Promise<IUser> => {
    const response = await userService.createUser(user);
    return response;
  },
);

export const patchUserAsync = createAsyncThunk(
  'users/patchUser',
  async (user: IUser): Promise<IUser> => {
    const response = await userService.patchUser(user);
    return response;
  },
);

export const deleteUserAsync = createAsyncThunk(
  'users/deletUser',
  async (id: string): Promise<IDeleteResponse> => {
    const response = await userService.deleteUser(id);
    return response;
  },
);



const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.fetchingUsers = true;
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.users = getArrayFromObject(action.payload);
        state.fetchingUsers = false;
      })
      .addCase(getUsersAsync.rejected, (state) => {
        state.fetchingUsers = false;
      })

      .addCase(createUserAsync.pending, (state) => {
        state.savingUser = true;
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.users = [...(state.users ?? []), {
          id: action.payload.name,
          ...action.meta.arg,
        }]
        state.savingUser = false;
      })
      .addCase(createUserAsync.rejected, (state) => {
        state.savingUser = false;
      })

      .addCase(patchUserAsync.pending, (state) => {
        state.savingUser = true;
      })
      .addCase(patchUserAsync.fulfilled, (state, action) => {
        state.users = state.users?.map((user) => {
          if (user.id === action.meta.arg.id) {
            //spread old user and overwrite data with new updated user's spread data
            return {
              ...user,
              ...action.payload
            };
          }
          else return user;
        });
        state.savingUser = false;
      })
      .addCase(patchUserAsync.rejected, (state) => {
        state.savingUser = false;
      })

      .addCase(deleteUserAsync.pending, (state) => {
        state.deletingUser = true;
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.users = state.users?.filter((user) => user.id !== action.meta.arg);
        state.deletingUser = false;
      })
      .addCase(deleteUserAsync.rejected, (state) => {
        state.deletingUser = false;
      })
  },
});

export default usersSlice.reducer;
