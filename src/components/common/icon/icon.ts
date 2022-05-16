import { styled } from '@mui/material/styles';

export const IconWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: '20px',
}));

export const IconWrapperLink = styled(IconWrapper)(() => ({
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer'
  }
}));

export const Icon = styled('img')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20px',
  height: '20px',
}));