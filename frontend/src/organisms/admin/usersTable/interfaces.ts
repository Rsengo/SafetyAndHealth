export interface UserTableEntity {
    id: string;
    
    email: string;

    userName: string;

    position?: string;

    firstName: string;

    middleName?: string;

    lastName: string;

    contactPhoneNumber?: string;

    birthdayDate: Date;
}

export interface UserTableProps {
    data: UserTableEntity[],

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;
}