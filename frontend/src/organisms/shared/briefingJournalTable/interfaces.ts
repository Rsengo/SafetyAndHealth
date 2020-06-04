import { BriefingJournalRecordDto } from "../../../api/models/BriefingJournalRecord";

export interface BriefingJournalTableProps {
    data: BriefingJournalRecordDto[];

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;

    onRowAdd: (entity: BriefingJournalRecordDto) => void;

    onRowUpdate: (entity: BriefingJournalRecordDto) => void;

    onRowDelete: (entity: BriefingJournalRecordDto) => void;
}