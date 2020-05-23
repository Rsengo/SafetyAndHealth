import { MaterialTableProps } from "material-table";
import { FC } from "react";

export interface TableProps<TData extends object> extends MaterialTableProps<TData> {
    searchValue?: string
}