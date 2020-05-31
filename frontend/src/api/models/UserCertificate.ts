import { FileDescriptionDto } from "./FileDescription";
import { BaseDtoEntity } from "./BaseModel";
import { CertificateDto } from "./Certificate";

export interface UserCertificateDto extends BaseDtoEntity {
    number: string;

    startDate: Date;

    group?: number;

    userId: string;

    file: FileDescriptionDto;

    certificate: CertificateDto;

    expiresDate?: Date;
}

export interface UserCertificateCreateUpdateDto extends BaseDtoEntity {
    number: string;

    startDate: Date | string;

    group: number | null;

    userId: string;

    certificateId: number;
}