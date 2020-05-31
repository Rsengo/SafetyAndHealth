import { UserDto } from '../../api/models/User';

export const mockUser: UserDto = {
    id: '1',
    userName: 'test login',
    email: 'some email',
    firstName: 'f_name',
    lastName: 'l_name',
    position: {
        id: 1,
        name: 'admin'
    },
    contactPhoneNumber: '+7(999)999-55-66',
    birthdayDate: new Date()
};

export const mockUserList: UserDto[] = [
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