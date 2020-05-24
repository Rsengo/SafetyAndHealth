export interface PositionsDictionaryTableEntity {
    id: number;

    name: string;
}

export interface PositionsDictionaryTableProps {
    data: PositionsDictionaryTableEntity[];

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;

    onRowAdd: (entity: PositionsDictionaryTableEntity) => void;

    onRowUpdate: (entity: PositionsDictionaryTableEntity) => void;

    onRowDelete: (entity: PositionsDictionaryTableEntity) => void;
}