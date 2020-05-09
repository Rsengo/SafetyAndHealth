export interface UserDto {
    Id: string;

    Email: string;

    UserName: string;

    PositionId: number | null;

    FirstName: string;

    MiddleName: string;

    LastName: string;
}

export interface UserCreateDto {
    UserName: string;

    Password: string;

    Email: string;

    PositionId: number | null;

    FirstName: string;

    MiddleName: string;

    LastName: string;
}

export interface UserUpdateDto {
    Id: string;

    Email: string;

    PositionId: number | null;

    FirstName: string;

    MiddleName: string;

    LastName: string;
}