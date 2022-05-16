import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ICustomTableProps, ITableRowItem } from './customTableProps';
import { TableHeaderCell, TableItemButton, TableItemText, PaginationWrapper } from './customTableStyles';
import { Pagination } from '@mui/material';
import { Icon, IconWrapperLink } from '../icon/icon';


const CustomTable = ({
  headers,
  rows,
  hasIndexes = false,
  pagination = {
    hasPagination: false,
    count: 0,
    currentPage: 0,
    handlePagination: null,
    pageSize: 0,
  },
  hasFilter = false,
  handleOpenFilter = () => { },
}: ICustomTableProps) => {

  const {
    hasPagination,
    count,
    currentPage,
    handlePagination,
    pageSize
  } = pagination;

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

  const getPaginationProps = () => {
    if (pagination) {
      return {
        count: Math.ceil(count / pageSize),
        page: currentPage,
        onChange: (_event: React.ChangeEvent<unknown>, value: number) => {
          handlePagination(value);
        }
      }
    }
    return {};
  }

  return (
    <>
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
              {
                hasFilter && (
                  <TableHeaderCell align="center">
                    <IconWrapperLink onClick={handleOpenFilter}>
                      <Icon src="./filter_icon.svg" alt="filter icon" />
                    </IconWrapperLink>
                  </TableHeaderCell>
                )
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
                  row.rowItems.map((rowItem, index) => (
                    <TableCell align="center" key={index}>{renderRowItem(rowItem)}</TableCell>
                  ))
                }
                {
                  hasFilter && (
                    <TableHeaderCell align="center"></TableHeaderCell>
                  )
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        hasPagination &&
        <PaginationWrapper>
          <Pagination {...getPaginationProps()} />
        </PaginationWrapper>
      }
    </>
  );
}

export default CustomTable;