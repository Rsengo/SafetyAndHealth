import { BaseDtoDictionary } from "./BaseModel";

export interface CertificateDto extends BaseDtoDictionary {
    validationTime: number;

    hasGroup: boolean;
}

export interface CertificateCreateUpdateDto extends BaseDtoDictionary {
    validationTime: number;

    hasGroup: boolean;
}