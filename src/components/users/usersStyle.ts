import { styled } from '@mui/material/styles';

export const UsersWrapper = styled('div')(() => ({
  width: '90%',
  margin: 'auto',
}));

export const AddUserButton = styled('button')(({theme}) => ({
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
  wordBreak: 'break-word',
  margin: '30px auto',
  '&:hover':{
    opacity: 0.8,
    cursor: 'pointer',
  },
  border: 'none',
  outline: 'none',
  '&:focus':{
    outline: 'none',
    border: 'none',
  },
  marginTop: '5px',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.dark,
  [theme.breakpoints.down('md')]: {
    width: '95%',
  }
}));