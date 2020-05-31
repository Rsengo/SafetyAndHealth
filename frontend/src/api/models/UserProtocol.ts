import { FileDescriptionDto } from "./FileDescription";
import { BaseDtoEntity } from "./BaseModel";
import { CertificateDto } from "./Certificate";

export interface UserProtocolDto extends BaseDtoEntity {
    number: string;

    startDate: Date;

    userId: string;

    file: FileDescriptionDto;

    certificate: CertificateDto;

    expiresDate?: Date;
}

export interface UserProtocolCreateUpdateDto {
    number: string;

    startDate: Date | string;

    userId: string;

    certificateId: number;
}