import { PositionDto } from './Position';

export interface UserDto {
    id: string;

    email: string;

    userName: string;

    position?: PositionDto;

    firstName: string;

    middleName?: string;

    lastName: string;

    contactPhoneNumber?: string;

    birthdayDate: Date;

    avatar?: string;
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

    birthdayDate: Date;
}

export interface UserUpdateDto {
    id: string;

    email: string;

    positionId?: number;

    firstName: string;

    middleName?: string;

    lastName: string;

    contactPhoneNumber?: string;

    birthdayDate: Date;
}