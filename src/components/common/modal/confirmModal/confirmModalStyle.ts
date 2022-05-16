import { styled } from '@mui/material/styles';


export interface IConfirmModalProps {
  severity: 'success' | 'error';
}

export const ConfirmModalWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ConfirmModalTitle = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  wordBreak: 'break-all',
  fontSize: '1.4em',
  color: theme.palette.common.black,
  marginBottom: '20px'
}));

export const ButtonsWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Button = styled('div')(() => ({
  fontSize: '1.2em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '15px',
  '&:hover': {
    opacity: '0.8',
    cursor: 'pointer',
  },
}));

export const ConfirmButton = styled(Button)<IConfirmModalProps>(({ theme, severity }) => ({
  backgroundColor: severity === 'success' ? theme.palette.success.main : theme.palette.error.main,
  border: `2px solid ${severity === 'success'? theme.palette.success.main : theme.palette.error.main}`,
  color: theme.palette.common.white,
}));

export const CancelButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `2px solid ${theme.palette.common.black}`,
  color: theme.palette.text.primary,
  marginLeft: '10%',
}));