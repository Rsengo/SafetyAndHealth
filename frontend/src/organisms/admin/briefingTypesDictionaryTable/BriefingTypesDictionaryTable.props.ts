import { Column } from 'material-table';
import { BriefingTypeDto } from '../../../api/models/BriefingType';
import Dictionaries from '../../../constants/Dictionaries.json';

export const title: string = Dictionaries.briefingTypes;

export const columns: Column<BriefingTypeDto>[] = [
    {
        field: 'id',
        hidden: true,
        
    },
    {
        field: 'name',
        title: 'Название',
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    }
];