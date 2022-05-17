import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
}));

export const SubmitButton = styled('button')(({ theme }) => ({
  width: '100%',
  fontSize: '1.2em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
  wordBreak: 'break-word',
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  },
  border: 'none',
  outline: 'none',
  '&:focus': {
    outline: 'none',
    border: 'none',
  },
  marginTop: '5px',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
}));

export const FormTextField = styled(TextField)(() => ({
  minWidth: '300px'
}));