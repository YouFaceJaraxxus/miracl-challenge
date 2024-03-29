import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ConfirmModal from '../../common/modal/confirmModal/confirmModal';
import IConfirmModalProps from '../../common/modal/confirmModal/confirmModalProps';
import CustomModal from '../../common/modal/customModal';
import { CustomForm, FormTextField, SubmitButton } from '../../common/customForm/customFormStyle';
import ISaveDocumentFormProps from './saveDocumentFormProps';
import { ICreateDocument } from '../../../service/interfaces/documentService';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useAppSelector } from '../../../redux/store/hooks';
import { selectDocumentTypes } from '../../../redux/store/store';

const SaveDocumentForm = ({
  isOpen,
  handleClose,
  handleFormSubmit,
  type,
  initialValues,
}: ISaveDocumentFormProps) => {
  const { handleSubmit, control, getValues, setValue } = useForm<ICreateDocument>({
    defaultValues: initialValues,
  });

  const {documentTypes} = useAppSelector(selectDocumentTypes);

  useEffect(() => {
    if (initialValues) {
      setValue('name', initialValues.name);
      setValue('type', initialValues.type);
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
        setValue('type', '');
      },
      handleClose: closeConfirmModal,
      severity: 'success',
      title: type === 'create' ? 'Add document' : 'Update document',
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
            name="type"
            control={control}
            defaultValue={""}
            render={({
              field: { onChange, value },
              fieldState: { error },
            }) => (
              <FormControl fullWidth>
                <InputLabel id="type-update-select-label">Type</InputLabel>
                <Select
                  labelId="type-update-select-label"
                  id="type-update-select"
                  value={value ?? ""}
                  label="Filter by"
                  defaultValue={"pdf"}
                  fullWidth
                  error={!!error}
                  onChange={onChange}
                  sx={{
                    marginBottom: '15px'
                  }}
                >
                  {
                    documentTypes?.map((dType, index) => (
                      <MenuItem key={index} value={dType.key}>{dType.value}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            )}
            rules={{
              required: 'Type required',
            }}
          />

          <SubmitButton
            type="submit"
          >
            {type === 'create' ? 'Create' : 'Update'} document
          </SubmitButton>
        </CustomForm>
        <ConfirmModal {...confirmModalConfig} />
      </>
    </CustomModal>
  )
};

export default SaveDocumentForm;