import { Column } from 'material-table';
import { CertificatesDictionaryTableProps } from './interfaces';

export const title: string = 'Сертификаты';

export const columns: Column<CertificatesDictionaryTableProps>[] = [
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
    },
    {
        // TODO editing element change
        field: 'validationTime',
        title: 'Срок действия',
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'hasGroup',
        title: 'Наличие групп',
        cellStyle: {
            width: '100%' // TODO because of hidden column
        },
        type: 'boolean'
    },
];