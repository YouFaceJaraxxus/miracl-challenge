import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { selectDocuments } from '../../redux/store/store';
import Content from '../common/content/content';
import ConfirmModal from '../common/modal/confirmModal/confirmModal';
import IConfirmModalProps from '../common/modal/confirmModal/confirmModalProps';
import CustomTable from '../common/table/customTable';
import { ICustomTablePagination, ITableRow } from '../common/table/customTableProps';
import { deleteDocumentAsync, getDocumentsAsync, patchDocumentAsync } from '../../redux/slices/documentsSlice';
import IDocument from '../../models/document/IDocument';
import SaveDocumentForm from './saveDocumentForm/saveDocumentForm';
import { DocumentsWrapper } from './documentsStyles';
import ISaveDocumentFormProps from './saveDocumentForm/saveDocumentFormProps';
import { ICreateDocument } from '../../service/interfaces/documentService';
import { DOCUMENTS_PAGE_SIZE } from '../../util/constants';

const documentsTableHeaders = [
  'Name',
  'Type',
  '',
  ''
] as string[];

const Documents = () => {
  const { documents, count } = useAppSelector(selectDocuments);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const getDocuments = (offset?: number) => {
    dispatch(getDocumentsAsync({
      limit: DOCUMENTS_PAGE_SIZE,
      offset,
    }))
  }

  useEffect(() => {
    getDocuments(1);
  }, []);

  const closeSaveDocumentModal = () => {
    setSaveDocumentModalConfig({
      ...saveDocumentModalConfig,
      isOpen: false,
    })
  }

  const deleteDocument = (id: string) => {
    dispatch(deleteDocumentAsync(id));
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
    handleClose: closeDeleteDocumentModal,
    severity: 'error',
    title: 'Delete document?',
  } as IConfirmModalProps);

  const patchDocument = (document: IDocument) => {
    dispatch(patchDocumentAsync(document));
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
        <CustomTable
          headers={documentsTableHeaders}
          rows={getDocumentTableRows()}
          hasIndexes
          pagination={getPagination()}
        />
      </DocumentsWrapper>
    </Content>
  )
};

export default Documents;