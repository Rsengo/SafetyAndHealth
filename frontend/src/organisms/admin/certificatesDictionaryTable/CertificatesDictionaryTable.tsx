import React, { FC } from 'react';
import { CertificatesDictionaryTableProps } from './interfaces';
import Table from '../../../molecules/table/Table';
import { title, columns } from './CertificatesDictionaryTable.props';
import { CertificateDto } from '../../../api/models/Certificate';

const CertificatesDictionaryTable: FC<CertificatesDictionaryTableProps> = ({
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
            onRowAdd: (data: CertificateDto) => {
                onRowAdd(data);
                return new Promise((resolve) => resolve());
            },
            onRowUpdate: (data: CertificateDto) => {
                onRowUpdate(data);
                return new Promise((resolve) => resolve());
            },
            onRowDelete: (data: CertificateDto) => {
                onRowDelete(data);
                return new Promise((resolve) => resolve());
            }
        }}
    />
);

export default CertificatesDictionaryTable;