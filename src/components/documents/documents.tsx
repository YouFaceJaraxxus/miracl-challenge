import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectDocuments, selectUsers } from '../../redux/store/store';
import Content from '../common/content/content';
import ConfirmModal from '../common/modal/confirmModal/confirmModal';
import IConfirmModalProps from '../common/modal/confirmModal/confirmModalProps';
import CustomTable from '../common/table/customTable';
import { ICustomTablePagination, ITableRow } from '../common/table/customTableProps';
import { deleteDocumentAsync, getDocumentsAsync, patchDocumentAsync } from '../../redux/slices/documentsSlice';
import IDocument from '../../models/document/IDocument';
import SaveDocumentForm from './saveDocumentForm/saveDocumentForm';
import { DocumentsWrapper, NoUserSelected, SelectUserWrapper } from './documentsStyle';
import ISaveDocumentFormProps from './saveDocumentForm/saveDocumentFormProps';
import { ICreateDocument } from '../../service/interfaces/documentService';
import { DOCUMENTS_PAGE_SIZE, ERROR, SUCCESS } from '../../util/constants';
import FilterDocumentsModal from './filterDocumentsModal/filterDocumentsModal';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { getUsersAsync } from '../../redux/slices/usersSlice';
import { openSnackbar } from '../../redux/slices/commonSlice';

const documentsTableHeaders = [
  'Name',
  'Type',
  '',
  '',
] as string[];

const Documents = () => {
  const { documents, count } = useAppSelector(selectDocuments);
  const { users } = useAppSelector(selectUsers);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);

  const handleUserSelectChange = (e: SelectChangeEvent) => {
    setCurrentUser(users.find((u) => u.id === e.target.value));
  }

  const getDocuments = (offset?: number, type = filterDocumentsModalType, value = filterDocumentsModalValue) => {
    dispatch(getDocumentsAsync({
      limit: DOCUMENTS_PAGE_SIZE,
      offset,
      filter: {
        ...(type && value && {
          [type]: value
        })
      },
      ...(currentUser && {
        query: {
          orderBy: '"contactId"',
          equalTo: `"${currentUser.id}"`
        }
      })
    }))
  }

  const closeSaveDocumentModal = () => {
    setSaveDocumentModalConfig({
      ...saveDocumentModalConfig,
      isOpen: false,
    })
  }


  const deleteDocument = (id: string) => {
    dispatch(deleteDocumentAsync(id)).then(() => {
      //an edge case: what if we delete the last item in the list on the current page
      if (documents.length === 1) {
        handlePagination(1);
      }
      dispatch(openSnackbar({
        showSnackbar: true,
        snackbarText: 'Document deleted',
        snackbarType: SUCCESS,
      }))
    });
  }

  const closeDeleteDocumentModal = () => {
    setDeleteDocumentModalConfig({
      ...deleteDocumentModalConfig,
      isOpen: false,
    })
  }

  const [saveDocumentModalConfig, setSaveDocumentModalConfig] = useState(
    {
      isOpen: false, handleClose: closeSaveDocumentModal
    } as ISaveDocumentFormProps
  );

  const [deleteDocumentModalConfig, setDeleteDocumentModalConfig] = useState({
    isOpen: false,
    handleClose: () => {
      setDeleteDocumentModalConfig({
        ...deleteDocumentModalConfig,
        isOpen: false,
      })
    },
    severity: 'error',
    title: 'Delete document?',
  } as IConfirmModalProps);


  const [filterDocumentsModalOpen, setFilterDocumentsModalOpen] = useState(false);
  const [filterDocumentsModalValue, setFilterDocumentsModalValue] = useState('');
  const [filterDocumentsModalType, setFilterDocumentsModalType] = useState('name');
  const [alreadyFetchedDocs, setAlreadyFetchedDocs] = useState(false);


  useEffect(() => {
    if (!alreadyFetchedDocs) {
      dispatch(getUsersAsync());
      setAlreadyFetchedDocs(true);
    } else {
      getDocuments(0, filterDocumentsModalType, filterDocumentsModalValue);
      setCurrentPage(1);
    }

  }, [filterDocumentsModalValue, filterDocumentsModalType, currentUser])


  const patchDocument = (document: IDocument) => {
    dispatch(patchDocumentAsync(document)).then(() => {
      dispatch(openSnackbar({
        showSnackbar: true,
        snackbarText: 'Document updated',
        snackbarType: SUCCESS,
      }))
    });
  }

  const openPatchDocumentModal = (document: IDocument) => {
    setSaveDocumentModalConfig({
      ...saveDocumentModalConfig,
      isOpen: true,
      type: 'update',
      handleFormSubmit: (document: IDocument | ICreateDocument) => {
        patchDocument(document as IDocument);
      },
      initialValues: document
    })
  };

  const openDeleteDocumentModal = (id: string) => {
    setDeleteDocumentModalConfig({
      ...deleteDocumentModalConfig,
      isOpen: true,
      handleAccept: () => {
        deleteDocument(id);
        closeDeleteDocumentModal();
      }
    })
  }

  const getDocumentTableRows = (): ITableRow[] => {
    return documents ? documents.map((document) => {
      return {
        id: document.id,
        rowItems: [
          {
            type: 'text',
            text: document.name,
          },
          {
            type: 'text',
            text: document.type,
          },
          {
            type: 'button',
            text: 'Update',
            action: () => openPatchDocumentModal(document),
            color: theme.palette.common.white,
            bgColor: theme.palette.primary.main,
          },
          {
            type: 'button',
            text: 'Delete',
            action: () => openDeleteDocumentModal(document.id),
            color: theme.palette.common.white,
            bgColor: theme.palette.error.main,
          },
        ]
      } as ITableRow;
    })
      :
      []
  }

  const handlePagination = (page: number) => {
    getDocuments((page - 1) * DOCUMENTS_PAGE_SIZE);
    setCurrentPage(page);
  }

  const getPagination = (): ICustomTablePagination => {
    if (count > DOCUMENTS_PAGE_SIZE) {
      return {
        hasPagination: true,
        handlePagination,
        currentPage,
        pageSize: DOCUMENTS_PAGE_SIZE,
        count,
      }
    }
    else return { hasPagination: false };
  }

  return (
    <Content title="Documents">
      <DocumentsWrapper sx={{
        width: {
          xs: '100%'
        }
      }}>
        <SaveDocumentForm {...saveDocumentModalConfig} />
        <ConfirmModal {...deleteDocumentModalConfig} />
        <FilterDocumentsModal
          isOpen={filterDocumentsModalOpen}
          handleClose={() => {
            setFilterDocumentsModalOpen(false);
          }}
          handleTypeChange={(type: string) => {
            setFilterDocumentsModalType(type);
            if (type === 'type') {
              setFilterDocumentsModalValue('pdf');
            } else setFilterDocumentsModalValue('');
          }}
          handleValueChange={(value: string) => {
            setFilterDocumentsModalValue(value);
          }}
          type={filterDocumentsModalType}
          value={filterDocumentsModalValue}
          clearFilter={() => {
            setFilterDocumentsModalValue('');
          }}
        />
        <SelectUserWrapper>
          <FormControl>
            <InputLabel id="user-select-label">User</InputLabel>
            <Select
              labelId="user-select-label"
              id="user-select"
              value={currentUser ? currentUser.id : ""}
              label="User"
              defaultValue={""}
              onChange={handleUserSelectChange}
              sx={{ minWidth: '100px' }}
            >
              {
                users?.map((user) => (
                  <MenuItem key={user.id} value={user.id}>{user.name} {user.lastName}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </SelectUserWrapper>
        {
          currentUser ? (
            <CustomTable
              itemType='Documents'
              headers={documentsTableHeaders}
              rows={getDocumentTableRows()}
              hasIndexes
              pagination={getPagination()}
              hasFilter
              handleOpenFilter={() => {
                setFilterDocumentsModalOpen(true);
              }}
            />
          )
            :
            (
              <NoUserSelected>Select a user to fetch his documents.</NoUserSelected>
            )
        }

      </DocumentsWrapper>
    </Content>
  )
};

export default Documents;