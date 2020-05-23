import { TableRowData } from "../../molecules/multiHeaderDisplayOnlyTable/interfaces";

export const headers: TableRowData[] = [
    {
        columns: [
            { data: 'A1', rowSpan: 2, type: 'header'},
            { data: 'A2', colSpan: 2, type: 'header' },
            { data: 'A3', colSpan: 2, type: 'header' },
        ]
    }, 
    {
        columns: [
            { data: 'A21', type: 'header' },
            { data: 'A22', type: 'header' },
            { data: 'A31', type: 'header' },
            { data: 'A32', type: 'header' }
        ]
    }
];

export const data: TableRowData[] = [
    {
        columns: [
            { data: 'B1' },
            { data: 'B2' },
            { data: 'B3' },
            { data: 'B4' },
            { data: 'B5' }
        ]
    },
    {
        columns: [
            { data: 'C1' },
            { data: 'C2' },
            { data: 'C3', type: 'danger' },
            { data: 'C4' },
            { data: 'C5' }
        ]
    }
];