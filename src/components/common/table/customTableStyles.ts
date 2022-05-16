import { TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ITableItem{
  color?: string;
  bgcolor?: string;
}
export const TableHeaderCell = styled(TableCell)(() => ({
  fontWeight: 'bolder',
}));

export const TableItemText = styled('div')<ITableItem>(({theme, color, bgcolor}) => ({
  textAlign: 'center',
  color: color?? theme.palette.common.black,
  backgroundColor: bgcolor?? theme.palette.common.white,
}));

export const TableItemButton = styled('div')<ITableItem>(({theme, color, bgcolor}) => ({
  display: 'inline-block',
  textAlign: 'center',
  color: color?? theme.palette.common.black,
  backgroundColor: bgcolor?? theme.palette.common.white,
  margin: '0',
  padding: '5px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  '&:hover':{
    opacity: '0.8',
  }
}));