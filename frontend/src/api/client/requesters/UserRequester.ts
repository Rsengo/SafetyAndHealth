import { AxiosRequestConfig } from 'axios';
import BaseRequester from './BaseRequester';
import ApiConstants from '../../../constants/ApiConstants.json';
import { CertificateCreateUpdateDto } from '../../models/Certificate';
import { UserDto, UserCreateDto, UserUpdateDto } from '../../models/User';

class UserRequester extends BaseRequester {
    constructor(config: AxiosRequestConfig) {
        super(config);
    }

    getAll(): Promise<UserDto[]> {
        return this._get<UserDto[]>(ApiConstants.routes.user.getAll);
    }

    create(user: UserCreateDto): Promise<UserDto> {
        return this._post(ApiConstants.routes.user.create, user);
    }

    update(user: UserUpdateDto): Promise<UserDto> {
        return this._put(ApiConstants.routes.user.create, user);
    }

    delete(userId: string): Promise<void> {
        return this._delete(`${ApiConstants.routes.user.delete}/${userId}`);
    }
}

export default UserRequester;