import { BriefingTypeDto } from '../../../api/models/BriefingType';

export interface BriefingTypesDictionaryTableProps {
    data: BriefingTypeDto[];

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;

    onRowAdd: (entity: BriefingTypeDto) => void;

    onRowUpdate: (entity: BriefingTypeDto) => void;

    onRowDelete: (entity: BriefingTypeDto) => void;
}