import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ICustomTableProps, ITableRowItem } from './customTableProps';
import { TableHeaderCell, TableItemButton, TableItemText } from './customTableStyles';


const CustomTable = ({
  headers,
  rows,
  hasIndexes = false
}: ICustomTableProps) => {

  const handleItemButtonClick = (action: Function | undefined) => {
    if (action) action();
  }

  const renderRowItem = (rowItem: ITableRowItem) => {
    switch (rowItem.type) {
      case ('button'): {
        return <TableItemButton
          color={rowItem.color}
          bgcolor={rowItem.bgColor}
          onClick={() => {
            handleItemButtonClick(rowItem.action);
          }}
        >{rowItem.text}</TableItemButton>
      }
      default: {
        return <TableItemText>{rowItem.text}</TableItemText>
      }
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>

          <TableRow>
            {hasIndexes &&
              <TableHeaderCell align="center">No.</TableHeaderCell>
            }
            {
              headers.map((header, index) => (
                <TableHeaderCell align="center" key={index}>{header}</TableHeaderCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {hasIndexes &&
                <TableCell align="center">{index + 1}</TableCell>
              }
              {
                row.rowItems.map((rowItem) => (
                  <TableCell align="center" key={rowItem.id}>{renderRowItem(rowItem)}</TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;