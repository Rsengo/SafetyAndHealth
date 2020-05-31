import React, { FC } from 'react';
import { PositionsDictionaryTableProps } from './interfaces';
import Table from '../../../molecules/table/Table';
import { title, columns } from './PositionsDictionaryTable.props';
import { PositionDto } from '../../../api/models/Position';

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
            onRowAdd: (data: PositionDto) => {
                onRowAdd(data);
                return new Promise((resolve) => resolve());
            },
            onRowUpdate: (data: PositionDto) => {
                onRowUpdate(data);
                return new Promise((resolve) => resolve());
            },
            onRowDelete: (data: PositionDto) => {
                onRowDelete(data);
                return new Promise((resolve) => resolve());
            }
        }}
    />
);

export default PositionsDictionaryTable;