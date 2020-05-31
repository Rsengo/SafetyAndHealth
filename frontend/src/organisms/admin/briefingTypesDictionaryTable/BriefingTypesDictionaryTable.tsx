import React, { FC } from 'react';
import { BriefingTypesDictionaryTableProps } from './interfaces';
import Table from '../../../molecules/table/Table';
import { title, columns } from './BriefingTypesDictionaryTable.props';
import { BriefingTypeDto } from '../../../api/models/BriefingType';

const BriefingTypesDictionaryTable: FC<BriefingTypesDictionaryTableProps> = ({
    data,
    searchValue,
    isLoading,
    onSearchChange,
    onRowAdd,
    onRowUpdate,
    onRowDelete
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
        editable={{
            onRowAdd: (data: BriefingTypeDto) => {
                onRowAdd(data);
                return new Promise((resolve) => resolve());
            },
            onRowUpdate: (data: BriefingTypeDto) => {
                onRowUpdate(data);
                return new Promise((resolve) => resolve());
            },
            onRowDelete: (data: BriefingTypeDto) => {
                onRowDelete(data);
                return new Promise((resolve) => resolve());
            }
        }}
    />
);

export default BriefingTypesDictionaryTable;