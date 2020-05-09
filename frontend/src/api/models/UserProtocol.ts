import { FileDescriptionDto } from "./FileDescription";
import { BaseDtoEntity } from "./BaseModel";

export interface UserProtocolDto extends BaseDtoEntity {
    Number: string;

    StartDate: Date | string;

    UserId: string;

    File: FileDescriptionDto;

    CertificateId: number;

    ExpiresDate: Date | string | null;
}

export interface UserProtocolCreateUpdateDto {
    Number: string;

    StartDate: Date | string;

    UserId: string;

    CertificateId: number;
}