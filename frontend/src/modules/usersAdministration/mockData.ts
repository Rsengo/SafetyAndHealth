import { UserTableEntity } from "../../organisms/admin/usersTable/interfaces";

export const mockUser: UserTableEntity = {
    id: '1',
    userName: 'test login',
    email: 'some email',
    firstName: 'f_name',
    lastName: 'l_name',
    position: 'admin',
    contactPhoneNumber: '+7(999)999-55-66',
    birthdayDate: new Date()
};

export const mockUserList: UserTableEntity[] = [
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