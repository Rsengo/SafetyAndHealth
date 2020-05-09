import { BaseDtoEntity } from "./BaseModel";

export interface FileCreateUpdateDto extends BaseDtoEntity {
    file: File;
}