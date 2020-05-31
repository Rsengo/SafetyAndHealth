import { UserDto } from './User';
import { BaseDtoDictionary } from './BaseModel';
import { FileDescriptionDto } from './FileDescription';
import { BriefingTypeDto } from './BriefingType';

export interface BriefingDto extends BaseDtoDictionary {
    description?: string;

    created: Date;

    instructor: UserDto;

    mediaUrl?: string;

    textFile: FileDescriptionDto;

    type: BriefingTypeDto;
}

export interface BriefingCreateUpdateDto extends BaseDtoDictionary  {
    description?: string;

    created: Date;

    instructorId: string;

    mediaUrl?: string;

    textFile?: File;

    typeId: string;
}