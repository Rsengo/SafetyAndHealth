import React, { FC } from 'react';
import { BriefingJournalTableProps } from './interfaces';
import Table from '../../../molecules/table/Table';
import { title, columns, getActions } from './BriefingJournalTable.props';

const BriefingJournalTable: FC<BriefingJournalTableProps> = ({
    data,
    searchValue,
    isLoading,
    onSearchChange
}) => (
    <Table 
        title={title}
        isLoading={isLoading}
        columns={columns}
        data={data}
        options={{
            toolbar: true,
            search: true,
            showTitle: true,
            actionsColumnIndex: -1
        }}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        actions={[getActions]}
    />
);

export default BriefingJournalTable;