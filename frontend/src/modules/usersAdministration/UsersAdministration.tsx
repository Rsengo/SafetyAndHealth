import React, { FC } from 'react';
import UsersTable from '../../organisms/admin/usersTable/UsersTable';
import { mockUserList } from './mockData';

const UsersAdministration: FC = () => {
    return (
        <UsersTable
            data={mockUserList}
            searchValue=''
            onSearchChange={() => {}}
        />
    );
};

export default UsersAdministration;