import { TableCellProps } from "@material-ui/core";

export type ColumnType = 'danger' | 'header' | undefined;

export interface TableRowData {
    columns?: TableColumnData[]
}

export interface TableColumnData {
    data: string;

    colSpan?: number;

    rowSpan?: number;

    type?: ColumnType;
}

export interface MultiHeaderDisplayOnlyTableProps {
    headers: TableRowData[];

    data: TableRowData[];

    totalCount: number;

    rowsPerPage: number;

    page: number;

    onChangePage: (page: number) => void;

    onChangeRowsPerPage: (rowsPerPage: number) => void;
}

export interface MultiHeaderDisplayOnlyTableCellProps extends TableCellProps {
    type?: ColumnType;
}