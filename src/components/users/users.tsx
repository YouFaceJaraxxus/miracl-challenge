import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import IUser from '../../models/user/IUser';
import { openSnackbar } from '../../redux/slices/commonSlice';
import { createUserAsync, deleteUserAsync, getUsersAsync, patchUserAsync } from '../../redux/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectUsers } from '../../redux/store/store';
import { ICreateUser } from '../../service/interfaces/userService';
import { SUCCESS } from '../../util/constants';
import Content from '../common/content/content';
import ConfirmModal from '../common/modal/confirmModal/confirmModal';
import IConfirmModalProps from '../common/modal/confirmModal/confirmModalProps';
import CustomTable from '../common/table/customTable';
import { ITableRow } from '../common/table/customTableProps';
import SaveUserForm from './saveUserForm/saveUserForm';
import ISaveUserFormProps from './saveUserForm/saveUserFormProps';
import { AddUserButton, UsersWrapper } from './usersStyle';

const userTableHeaders = [
  'Name',
  'Last name',
  '',
  ''
] as string[];

const Users = () => {
  const { users } = useAppSelector(selectUsers);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const closeSaveUserModal = () => {
    setSaveUserModalConfig({
      ...saveUserModalConfig,
      isOpen: false,
    })
  }

  const deleteUser = (id: string) => {
    dispatch(deleteUserAsync(id)).then(() => {
      dispatch(openSnackbar({
        showSnackbar: true,
        snackbarText: 'User deleted',
        snackbarType: SUCCESS,
      }))
    });
  }

  const closeDeleteUserModal = () => {
    setDeleteUserModalConfig({
      ...deleteUserModalConfig,
      isOpen: false,
    })
  }

  const [saveUserModalConfig, setSaveUserModalConfig] = useState({ isOpen: false, handleClose: closeSaveUserModal } as ISaveUserFormProps);
  const [deleteUserModalConfig, setDeleteUserModalConfig] = useState({
    isOpen: false,
    handleClose: closeDeleteUserModal,
    severity: 'error',
    title: 'Delete user?',
  } as IConfirmModalProps);

  const createUser = (user: ICreateUser) => {
    dispatch(createUserAsync(user)).then(() => {
      dispatch(openSnackbar({
        showSnackbar: true,
        snackbarText: 'User created',
        snackbarType: SUCCESS,
      }))
    });
  }

  const patchUser = (user: IUser) => {
    dispatch(patchUserAsync(user)).then(() => {
      dispatch(openSnackbar({
        showSnackbar: true,
        snackbarText: 'User updated',
        snackbarType: SUCCESS,
      }))
    });
  }

  const openCreateUserModal = () => {
    setSaveUserModalConfig({
      ...saveUserModalConfig,
      isOpen: true,
      type: 'create',
      handleFormSubmit: (user: ICreateUser) => {
        createUser(user);
      },
    })
  };

  const openPatchUserModal = (user: IUser) => {
    setSaveUserModalConfig({
      ...saveUserModalConfig,
      isOpen: true,
      type: 'update',
      handleFormSubmit: (user: IUser | ICreateUser) => {
        patchUser(user as IUser);
      },
      initialValues: user
    })
  };

  const openDeleteUserModal = (id: string) => {
    setDeleteUserModalConfig({
      ...deleteUserModalConfig,
      isOpen: true,
      handleAccept: () => {
        deleteUser(id);
        closeDeleteUserModal();
      }
    })
  }

  const getUserTableRows = (): ITableRow[] => {
    return users ? users.map((user) => {
      return {
        id: user.id,
        rowItems: [
          {
            type: 'text',
            text: user.name,
          },
          {
            type: 'text',
            text: user.lastName,
          },
          {
            type: 'button',
            text: 'Update',
            action: () => openPatchUserModal(user),
            color: theme.palette.common.white,
            bgColor: theme.palette.primary.main,
          },
          {
            type: 'button',
            text: 'Delete',
            action: () => openDeleteUserModal(user.id),
            color: theme.palette.common.white,
            bgColor: theme.palette.error.main,
          },
        ]
      } as ITableRow;
    })
      :
      []
  }

  return (
    <Content title="Users">
      <UsersWrapper sx={{
        width: {
          xs: '100%'
        }
      }}>
        <SaveUserForm {...saveUserModalConfig} />
        <ConfirmModal {...deleteUserModalConfig} />
        <AddUserButton onClick={openCreateUserModal}>Add user</AddUserButton>
        <CustomTable
          itemType='Users'
          headers={userTableHeaders}
          rows={getUserTableRows()}
          hasIndexes
        />
      </UsersWrapper>
    </Content>
  )
};

export default Users;