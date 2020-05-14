import { FileDescriptionDto } from "./FileDescription";
import { BaseDtoEntity } from "./BaseModel";

export interface UserCertificateDto extends BaseDtoEntity {
    number: string;

    startDate: Date | string;

    group: number | null;

    userId: string;

    file: FileDescriptionDto;

    certificateId: number;

    expiresDate: Date | string | null;
}

export interface UserCertificateCreateUpdateDto extends BaseDtoEntity {
    number: string;

    startDate: Date | string;

    group: number | null;

    userId: string;

    certificateId: number;
}