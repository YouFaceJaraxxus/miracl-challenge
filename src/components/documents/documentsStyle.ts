import { styled } from '@mui/material/styles';

export const DocumentsWrapper = styled('div')(() => ({
  width: '90%',
  margin: 'auto',
}));

export const SelectUserWrapper = styled('div')(() => ({
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px auto',
}));

export const NoUserSelected = styled('div')(() => ({
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '150px auto 0 auto',
  fontSize: '2em',
  fontWeight: 'bolder',
  textAlign: 'center',
  wordBreak: 'break-word',
}));