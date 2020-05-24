import React, { FC } from 'react';
import PositionsDictionaryTable from '../../organisms/admin/positionsDictionaryTable/PositionsDictionaryTable';
import { mockPositionsList } from './mockData';

const PositionsDictionaryTableModule: FC = () => (
    <PositionsDictionaryTable
        data={mockPositionsList}
        searchValue=''
        onSearchChange={() => {}}
        onRowAdd={() => {}}
        onRowUpdate={() => {}}
        onRowDelete={() => {}}
    />
);

export default PositionsDictionaryTableModule;