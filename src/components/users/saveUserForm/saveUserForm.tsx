import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ICreateUser } from '../../../service/interfaces/IUserService';
import ConfirmModal from '../../common/modal/confirmModal/confirmModal';
import IConfirmModalProps from '../../common/modal/confirmModal/confirmModalProps';
import CustomModal from '../../common/modal/customModal';
import ICreateUserFormProps from './saveUserFormProps';
import { CustomForm, FormTextField, SubmitButton } from '../../common/customForm/customFormStyle';
const SaveUserForm = ({
  isOpen,
  handleClose,
  handleFormSubmit,
  type,
  initialValues,
}: ICreateUserFormProps) => {
  const { handleSubmit, control, getValues, setValue } = useForm<ICreateUser>({
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (initialValues) {
      setValue('name', initialValues.name);
      setValue('lastName', initialValues.lastName);
    }
  }, [initialValues, setValue]);

  const [confirmModalConfig, setConfirmModalConfig] = useState({
    isOpen: false,
  } as IConfirmModalProps);

  const closeConfirmModal = () => {
    setConfirmModalConfig({
      ...confirmModalConfig,
      isOpen: false,
    })
  };

  const onSubmit = () => {
    setConfirmModalConfig({
      isOpen: true,
      handleAccept: () => {
        closeConfirmModal();
        handleFormSubmit({ ...getValues(), ...(type === 'update' && { id: initialValues?.id }) });
        handleClose();
        setValue('name', '');
        setValue('lastName', '');
      },
      handleClose: closeConfirmModal,
      severity: 'success',
      title: type === 'create' ? 'Add user' : 'Update user',
      showOnTop: true,
    })
  }

  return (
    <CustomModal isOpen={isOpen} handleClose={handleClose}>
      <>
        <CustomForm
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({
              field: { onChange, value },
              fieldState: { error },
            }) => (
              <FormTextField
                fullWidth
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
                type="text"
                label={'Name'}
                sx={{
                  marginBottom: '15px'
                }}
              />
            )}
            rules={{
              required: 'Name required',
              minLength: {
                value: 2,
                message: 'Name must contain at least two characters',
              },
            }}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({
              field: { onChange, value },
              fieldState: { error },
            }) => (
              <FormTextField
                fullWidth
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
                type="text"
                label={'Last name'}
                sx={{
                  marginBottom: '15px'
                }}
              />
            )}
            rules={{
              required: 'Last name required',
              minLength: {
                value: 2,
                message: 'Last name must contain at least two characters',
              },
            }}
          />

          <SubmitButton
            type="submit"
          >
            {type === 'create' ? 'Create' : 'Update'} user
          </SubmitButton>
        </CustomForm>
        <ConfirmModal {...confirmModalConfig} />
      </>
    </CustomModal>
  )
};

export default SaveUserForm;