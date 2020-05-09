import { UserDto } from '../../api/models/User';

export interface UsersState {
    userList: UserDto[],
    userListLoading: boolean
}

export const usersDefaultState: UsersState = {
    userList: [],
    userListLoading: false
};