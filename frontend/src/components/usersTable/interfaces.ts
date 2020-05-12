export interface UserTableEntity {
    id: string;
    
    email: string;

    userName: string;

    position?: string;

    firstName: string;

    middleName?: string;

    lastName: string;

    contactPhoneNumber?: string;
}

export interface UserTableProps {
    data: UserTableEntity[],
    searchable: boolean,
    onSearchChange?: (value: string) => void, //TODO depends on search
    searchValue?: string //TODO depends on search
}