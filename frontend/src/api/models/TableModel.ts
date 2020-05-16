export type ColumnTypeDto = 'danger' | 'header' | undefined;

export interface TableRowDto {
    columns?: TableColumnDto[]
}

export interface TableColumnDto {
    data: string;

    colSpan?: number;

    rowSpan?: number;

    type?: ColumnTypeDto;
}