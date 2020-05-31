import { UserDto } from '../../../api/models/User';
import { FileDescriptionDto } from '../../../api/models/FileDescription';
import { BriefingDto } from '../../../api/models/Briefing';

export interface BriefingCardProps {
    className: string;

    briefing: BriefingDto;

    onEditClick: () => void;
}