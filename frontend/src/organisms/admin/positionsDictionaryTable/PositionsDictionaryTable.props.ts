import { Column } from 'material-table';
import { PositionsDictionaryTableEntity } from './interfaces';

export const title: string = 'Должности';

export const columns: Column<PositionsDictionaryTableEntity>[] = [
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