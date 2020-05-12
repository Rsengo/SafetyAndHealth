import React from 'react';
import UsersTable from './components/usersTable/UsersTable';
import { UserTableEntity } from './components/usersTable/interfaces';
import BasePage from './components/basePage/BasePage';

const mockUser: UserTableEntity = {
  id: '1',
  userName: 'test login',
  email: 'some email',
  firstName: 'f_name',
  lastName: 'l_name',
  position: 'admin',
  contactPhoneNumber: '+7(999)999-55-66'
};

const mockData: UserTableEntity[] = [
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
  mockUser,
];

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <BasePage
      sideMenuOpened={open}
      onSideMenuOpen={() => setOpen(true)}
      onSideMenuClose={() => setOpen(false)}
    >
      <UsersTable
        searchable
        data={mockData}
        searchValue=''
        onSearchChange={() => {}}
      />
    </BasePage>
  );
};

export default App;
