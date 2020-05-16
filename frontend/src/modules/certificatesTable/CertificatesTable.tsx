import React, { FC } from 'react';
import MultiHeaderDisplayOnlyTable from '../../molecules/multiHeaderDisplayOnlyTable/MultiHeaderDisplayOnlyTable';

const CertificatesTable: FC = () => {
    return (
        <MultiHeaderDisplayOnlyTable
            headers={[
                {
                    columns: [
                        { data: 'A1', colSpan: 2, type: 'danger'},
                        { data: 'A2', rowSpan: 2 },
                        { data: 'A3', colSpan: 2},
                    ]
                }, 
                {
                    columns: [
                        { data: 'A11' },
                        { data: 'A12' },
                        { data: 'A31' }
                    ]
                }
            ]}
            data={[]}
            totalCount={10}
            page={1}
            rowsPerPage={10}
            onChangePage={() => {}}
            onChangeRowsPerPage={() => {}}
        />
    );
};

export default CertificatesTable;