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

interface ICustomTableProps{
  hasIndexes?: boolean;
  headers: string[];
  rows: ITableRow[];
}

export type{
  ICustomTableProps,
  ITableRow,
  ITableRowItem,
}