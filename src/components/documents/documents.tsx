import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import IUser from '../../models/user/IUser';
import { createUserAsync, deleteUserAsync, getUsersAsync, patchUserAsync } from '../../redux/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectUsers } from '../../redux/store/store';
import { ICreateUser } from '../../service/interfaces/IUserService';
import Content from '../common/content/content';
import ConfirmModal from '../common/modal/confirmModal/confirmModal';
import IConfirmModalProps from '../common/modal/confirmModal/confirmModalProps';
import CustomTable from '../common/table/customTable';
import { ITableRow } from '../common/table/customTableProps';
import SaveUserForm from './saveDocumentForm/saveDocumentForm';
import ICreateUserFormProps from './saveDocumentForm/saveDocumentFormProps';
import { AddUserButton, UsersWrapper } from './documentsStyles';

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
    dispatch(deleteUserAsync(id));
  }

  const closeDeleteUserModal = () => {
    setDeleteUserModalConfig({
      ...deleteUserModalConfig,
      isOpen: false,
    })
  }

  const [saveUserModalConfig, setSaveUserModalConfig] = useState({ isOpen: false, handleClose: closeSaveUserModal } as ICreateUserFormProps);
  const [deleteUserModalConfig, setDeleteUserModalConfig] = useState({
    isOpen: false,
    handleClose: closeDeleteUserModal,
    severity: 'error',
    title: 'Delete user?',
  } as IConfirmModalProps);

  const createUser = (user: ICreateUser) => {
    dispatch(createUserAsync(user));
  }

  const patchUser = (user: IUser) => {
    dispatch(patchUserAsync(user));
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
            action : () => openPatchUserModal(user),
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
        width:{
          xs: '100%'
        }
      }}>
        <SaveUserForm {...saveUserModalConfig} />
        <ConfirmModal {...deleteUserModalConfig} />
        <AddUserButton onClick={openCreateUserModal}>Add user</AddUserButton>
        <CustomTable
          headers={userTableHeaders}
          rows={getUserTableRows()}
          hasIndexes
        />
      </UsersWrapper>
    </Content>
  )
};

export default Users;