import { FileDescriptionDto } from "./FileDescription";
import { BaseDtoEntity } from "./BaseModel";

export interface UserCertificateDto extends BaseDtoEntity {
    Number: string;

    StartDate: Date | string;

    Group: number | null;

    UserId: string;

    File: FileDescriptionDto;

    CertificateId: number;

    ExpiresDate: Date | string | null;
}

export interface UserCertificateCreateUpdateDto extends BaseDtoEntity {
    Number: string;

    StartDate: Date | string;

    Group: number | null;

    UserId: string;

    CertificateId: number;
}