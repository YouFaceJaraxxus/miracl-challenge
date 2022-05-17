import { styled } from '@mui/material/styles';

export const ContentWrapper = styled('div')(() => ({
  display: 'block',
}));

export const ContentTitle = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2.5em',
  margin: '30px 0',
  fontWeight: 'bolder',
}));