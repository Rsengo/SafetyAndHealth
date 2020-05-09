import { AxiosRequestConfig } from 'axios';
import BaseRequester from './BaseRequester';
import ApiConstants from '../../../constants/ApiConstants.json';
import { UserCertificateCreateUpdateDto, UserCertificateDto } from '../../models/UserCertificate';
import { FileCreateUpdateDto } from '../../models/FileModel';
import { FileDescriptionDto } from '../../models/FileDescription';

class UserCertificateRequester extends BaseRequester {
    constructor(config: AxiosRequestConfig) {
        super(config);
    }

    getAll(): Promise<UserCertificateDto[]> {
        return this._get<UserCertificateDto[]>(ApiConstants.routes.userCertificate.getAll);
    }

    create(userCertificate: UserCertificateCreateUpdateDto): Promise<UserCertificateDto> {
        return this._post(ApiConstants.routes.userCertificate.create, userCertificate);
    }

    update(userCertificate: UserCertificateCreateUpdateDto): Promise<UserCertificateDto> {
        return this._put(ApiConstants.routes.userCertificate.create, userCertificate);
    }

    delete(userCertificateId: number): Promise<void> {
        return this._delete(`${ApiConstants.routes.userCertificate.delete}/${userCertificateId}`);
    }

    downloadFile(userCertificateId: number): void {
        this._download(`${ApiConstants.routes.userCertificate.dowloadFile}/${userCertificateId}`);
    }

    createFile(fileData: FileCreateUpdateDto): Promise<FileDescriptionDto> {
        return this._postForm(ApiConstants.routes.userCertificate.createFile, fileData);
    }

    deleteFile(userCertificateId: number): Promise<void> {
        return this._delete(`${ApiConstants.routes.userCertificate.deleteFile}/${userCertificateId}`);
    }
}

export default UserCertificateRequester;