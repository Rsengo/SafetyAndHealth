export interface UserDto {
    id: string;

    email: string;

    userName: string;

    positionId?: number;

    firstName: string;

    middleName?: string;

    lastName: string;

    contactPhoneNumber?: string;
}

export interface UserCreateDto {
    userName: string;

    password: string;

    email: string;

    positionId?: number;

    firstName: string;

    middleName?: string;

    lastName: string;

    contactPhoneNumber?: string;
}

export interface UserUpdateDto {
    id: string;

    email: string;

    positionId?: number;

    firstName: string;

    middleName?: string;

    lastName: string;

    contactPhoneNumber?: string;
}