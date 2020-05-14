import React, { FC } from 'react';
import UsersTable from '../../components/usersTable/UsersTable';
import { mockUserList } from './mockData';

const UsersAdministration: FC = () => {
    return (
        <UsersTable
            searchable
            data={mockUserList}
            searchValue=''
            onSearchChange={() => {}}
        />
    );
}

export default UsersAdministration;