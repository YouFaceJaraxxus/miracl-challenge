import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '400px',
  backgroundColor: theme.palette.common.white,
  p: 4,
  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    minWidth: '0px',
    width: '80%',
  },
  borderRadius: '10px',
  padding: '20px',
  boxShadow: `2px 2px ${theme.palette.grey['100']}`,
}));