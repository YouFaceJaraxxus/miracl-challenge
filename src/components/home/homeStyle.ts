import { styled } from '@mui/material/styles';

export const HomeWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
}));

export const HomeSubtitle = styled('h1')(() => ({
  margin: 'auto',
  textAlign: 'center',
  width: '100%',
}));
