import { UserDto } from '../api/models/User';

export const getInitials = (user: UserDto): string => {
    return user.middleName 
    ? `${user.lastName} ${user.firstName[0]}. ${user.middleName[0]}.` 
    : `${user.lastName} ${user.firstName[0]}.`
};