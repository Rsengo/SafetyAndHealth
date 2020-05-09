import { AxiosRequestConfig } from 'axios';
import BaseRequester from './BaseRequester';
import ApiConstants from '../../../constants/ApiConstants.json';
import { UserProtocolDto, UserProtocolCreateUpdateDto } from '../../models/UserProtocol';
import { FileCreateUpdateDto } from '../../models/FileModel';
import { FileDescriptionDto } from '../../models/FileDescription';

class UserProtocolRequester extends BaseRequester {
    constructor(config: AxiosRequestConfig) {
        super(config);
    }

    getAll(): Promise<UserProtocolDto[]> {
        return this._get<UserProtocolDto[]>(ApiConstants.routes.userProtocol.getAll);
    }

    create(userProtocol: UserProtocolCreateUpdateDto): Promise<UserProtocolDto> {
        return this._post(ApiConstants.routes.userProtocol.create, userProtocol);
    }

    update(userProtocol: UserProtocolCreateUpdateDto): Promise<UserProtocolDto> {
        return this._put(ApiConstants.routes.userProtocol.create, userProtocol);
    }

    delete(userProtocolId: number): Promise<void> {
        return this._delete(`${ApiConstants.routes.userProtocol.delete}/${userProtocolId}`);
    }

    downloadFile(userProtocolId: number): void {
        this._download(`${ApiConstants.routes.userProtocol.dowloadFile}/${userProtocolId}`);
    }

    createFile(fileData: FileCreateUpdateDto): Promise<FileDescriptionDto> {
        return this._postForm(ApiConstants.routes.userProtocol.createFile, fileData);
    }

    deleteFile(userProtocolId: number): Promise<void> {
        return this._delete(`${ApiConstants.routes.userProtocol.deleteFile}/${userProtocolId}`);
    }
}

export default UserProtocolRequester;