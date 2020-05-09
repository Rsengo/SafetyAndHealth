import { UserDto } from '../../api/models/User';

export default interface UsersState {
    userList: UserDto[],
    userListLoading: boolean
}