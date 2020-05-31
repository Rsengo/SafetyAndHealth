import React, { FC } from 'react';
import BriefingTypesDictionaryTable from '../../organisms/admin/briefingTypesDictionaryTable/BriefingTypesDictionaryTable';
import { mockBriefingTypesList } from './mockData';

const BriefingTypesDictionaryTableModule: FC = () => (
    <BriefingTypesDictionaryTable
        data={mockBriefingTypesList}
        searchValue=''
        onSearchChange={() => {}}
        onRowAdd={() => {}}
        onRowUpdate={() => {}}
        onRowDelete={() => {}}
    />
);

export default BriefingTypesDictionaryTableModule;