import { styled } from '@mui/material/styles';

export const ProgressWrapper = styled('div')(() => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '30px',
  border: '1px solid #eeeeee'
}));

export const ProgressText = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: 'bolder',
  fontSize: '2em',
  wordBreak: 'break-all',
}));