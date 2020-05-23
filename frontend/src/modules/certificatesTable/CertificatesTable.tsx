import React, { FC } from 'react';
import MultiHeaderDisplayOnlyTable from '../../molecules/multiHeaderDisplayOnlyTable/MultiHeaderDisplayOnlyTable';
import { headers, data } from './mockData';

const CertificatesTable: FC = () => {
    return (
        <MultiHeaderDisplayOnlyTable
            headers={headers}
            data={data}
            totalCount={10}
            page={1}
            rowsPerPage={10}
            onChangePage={() => {}}
            onChangeRowsPerPage={() => {}}
        />
    );
};

export default CertificatesTable;