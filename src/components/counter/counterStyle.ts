import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ICounterButton{
  color?: string;
  bgcolor?: string;
}

export const CounterWrapper = styled('div')(() => ({
  width: '90%',
  margin: 'auto',
}));

export const CounterValue = styled('div')(() => ({
  width: '100%',
  margin: '50px auto',
  fontWeight: 'bolder',
  textAlign: 'center',
  fontSize: '2em',
}));

export const TextFieldWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: 'auto',
}));

export const CounterTextField = styled(TextField)(({theme}) => ({
  margin: '10px auto',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));


export const CounterButton = styled('button')<ICounterButton>(({theme, color, bgcolor}) => ({
  width: '50%',
  fontSize: '1.2em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
  wordBreak: 'break-word',
  margin: '20px auto',
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
  color: color?? theme.palette.common.white,
  backgroundColor: bgcolor ?? theme.palette.primary.dark,
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));