import React, { FC } from 'react';
import UsersTable from '../../organisms/usersTable/UsersTable';
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