import { BaseDtoDictionary } from "./BaseModel";

export interface CertificateDto extends BaseDtoDictionary {
    validationTime: bigint;

    hasGroup: boolean;
}

export interface CertificateCreateUpdateDto extends BaseDtoDictionary {
    validationTime: bigint;

    hasGroup: boolean;
}