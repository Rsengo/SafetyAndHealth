import { Column } from 'material-table';
import Dictionaries from '../../../constants/Dictionaries.json';
import { PositionDto } from '../../../api/models/Position';

export const title: string = Dictionaries.positions;

export const columns: Column<PositionDto>[] = [
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