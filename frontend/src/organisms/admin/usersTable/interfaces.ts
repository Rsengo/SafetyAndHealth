import { UserDto } from '../../../api/models/User';

export interface UserTableProps {
    data: UserDto[],

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;
}