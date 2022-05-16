interface ITableRowItem{
  id?: string | number;
  text?: string | number;
  action?: Function;
  color?: string;
  bgColor?: string;
  type: 'text' | 'button';
}

interface ITableRow{
  id?: string | number;
  rowItems: ITableRowItem[];
}

interface ICustomTablePagination{
  hasPagination: boolean;
  pageSize?: number;
  currentPage?: number;
  count?: number;
  handlePagination?: (page: number) => void;
}

interface ICustomTableProps{
  headers: string[];
  rows: ITableRow[];
  hasIndexes?: boolean;
  pagination?: ICustomTablePagination;
  hasFilter?: boolean;
  handleOpenFilter?: () => void;
}

export type{
  ICustomTableProps,
  ITableRow,
  ITableRowItem,
  ICustomTablePagination,
}