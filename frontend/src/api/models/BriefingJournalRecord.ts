import { UserDto } from './User';
import { BriefingDto } from './Briefing';

export interface BriefingJournalRecordDto {
    user: UserDto;

    briefing: BriefingDto;

    dateOfPassage?: Date;

    activationDate: Date;
};