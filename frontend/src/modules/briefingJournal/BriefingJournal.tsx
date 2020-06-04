import React, { FC } from 'react';
import BriefingJournalTable from '../../organisms/shared/briefingJournalTable/BriefingJournalTable';
import { mockBriefingJournal } from './mockData';

const BriefingJournal: FC = () => {
    // TODO: sort by passed or not
    // TODO: fix scroll
    return (
        <BriefingJournalTable
            data={mockBriefingJournal}
            searchValue=''
            onSearchChange={() => {}}
            onRowAdd={() => {}}
            onRowUpdate={() => {}}
            onRowDelete={() => {}}
        />
    );
};

export default BriefingJournal;