import { styled } from '@mui/material/styles';

export interface SnackbarConfig{
  type: 'error' | 'success';
}

export const SnackbarWrapper = styled('div')<SnackbarConfig>(({theme, type}) => ({
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '5px',
  backgroundColor: theme.palette[type].main,
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    left: '10px',
    width: 'auto',
    margin: 'auto',
  },
}));


export const SnackbarText = styled('div')(() => ({
  flex: 1,
  wordBreak: 'break-all',
}));


export const SnackbarCloseIcon = styled('div')(() => ({
  marginLeft: '5px',
  paddingBottom: '2px',
  cursor: 'pointer',
  '&:hover':{
    opacity: '0.8',
  }
}));