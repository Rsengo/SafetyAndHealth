import React, { FC } from 'react';
import { PositionsDictionaryTableProps, PositionsDictionaryTableEntity } from './interfaces';
import Table from '../../molecules/table/Table';
import { title, columns } from './PositionsDictionaryTable.props';

const PositionsDictionaryTable: FC<PositionsDictionaryTableProps> = ({
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
            onRowAdd: (data: PositionsDictionaryTableEntity) => {
                onRowAdd(data);
                return new Promise((resolve) => resolve());
            },
            onRowUpdate: (data: PositionsDictionaryTableEntity) => {
                onRowUpdate(data);
                return new Promise((resolve) => resolve());
            },
            onRowDelete: (data: PositionsDictionaryTableEntity) => {
                onRowDelete(data);
                return new Promise((resolve) => resolve());
            }
        }}
    />
);

export default PositionsDictionaryTable;