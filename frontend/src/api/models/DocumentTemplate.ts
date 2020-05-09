import { BaseDtoDictionary } from "./BaseModel";
import { FileCreateUpdateDto } from "./FileModel";

export interface DocumentTemplateDto extends BaseDtoDictionary {
}

export interface DocumentTemplateCreateUpdateDto extends FileCreateUpdateDto {
    name: string;
}