import React, { FC } from 'react';
import { isNullOrUndefined } from 'util';
import Table from '../table/Table';
import { columns, title, actions } from './UsersTable.props';
import { UserTableProps } from './interfaces';

//TODO extract type
const UsersTable: FC<UserTableProps> = ({
    data,
    searchable,
    onSearchChange,
    searchValue
}) => {
    if (searchable && (isNullOrUndefined(searchValue) || !onSearchChange)) {
        throw new Error('Expected onSearchChanged and searchValue to be used with search');
    }

    return (
        <Table 
            title={title}
            columns={columns}
            data={data}
            options={{
                toolbar: true,
                search: searchable,
                showTitle: true,
                actionsColumnIndex: -1
            }}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            actions={actions}
        />
    );
}

UsersTable.defaultProps = {
    searchable: false
};

export default UsersTable;