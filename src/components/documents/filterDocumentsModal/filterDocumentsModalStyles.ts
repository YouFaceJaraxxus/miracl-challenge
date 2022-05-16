import { styled } from '@mui/material/styles';

export const FilterDocumentsModalWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
}));

export const FilterDocumentsModalSelect = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  margin: 'auto',
}));

export const FilterDocumentsModalTitle = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  margin: 'auto',
  fontWeight: 'bolder',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  wordBreak: 'break-all',
  fontSize: '1.4em',
  color: theme.palette.common.black,
  marginBottom: '20px',
}));