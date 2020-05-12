import { MaterialTableProps } from "material-table";

export interface TableProps<TData extends object> extends MaterialTableProps<TData> {
    searchValue?: string
}