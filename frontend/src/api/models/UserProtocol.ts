import { FileDescriptionDto } from "./FileDescription";
import { BaseDtoEntity } from "./BaseModel";

export interface UserProtocolDto extends BaseDtoEntity {
    number: string;

    startDate: Date | string;

    userId: string;

    file: FileDescriptionDto;

    certificateId: number;

    expiresDate: Date | string | null;
}

export interface UserProtocolCreateUpdateDto {
    number: string;

    startDate: Date | string;

    userId: string;

    certificateId: number;
}