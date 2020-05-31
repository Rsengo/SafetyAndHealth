import { PositionDto } from '../../../api/models/Position';

export interface PositionsDictionaryTableProps {
    data: PositionDto[];

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;

    onRowAdd: (entity: PositionDto) => void;

    onRowUpdate: (entity: PositionDto) => void;

    onRowDelete: (entity: PositionDto) => void;
}