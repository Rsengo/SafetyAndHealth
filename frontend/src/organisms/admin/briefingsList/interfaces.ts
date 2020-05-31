import { BriefingDto } from '../../../api/models/Briefing';
import { UiActionDescription } from '../../../types/uiActionDescription';

export interface BriefingsListProps {
    briefings: BriefingDto[];

    actions?: UiActionDescription[];

    onEditClick: (briefing: BriefingDto) => void;
}