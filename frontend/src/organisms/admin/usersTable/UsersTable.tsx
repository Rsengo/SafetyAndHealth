import React, { FC } from 'react';
import Table from '../../../molecules/table/Table';
import { columns, title, actions } from './UsersTable.props';
import { UserTableProps } from './interfaces';

//TODO extract type
const UsersTable: FC<UserTableProps> = ({
    data,
    isLoading,
    onSearchChange,
    searchValue
}) => {
    return (
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
            actions={actions}
        />
    );
}

export default UsersTable;