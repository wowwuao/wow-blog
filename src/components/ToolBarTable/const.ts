import { TableProps } from 'antd/lib/table/Table';

export interface IToolBarTable {
  columns: { dataIndex: string; title: string }[];
  storeKey: string;
  dataSource: Array<any>;
  tableProps?: TableProps<any>;
}