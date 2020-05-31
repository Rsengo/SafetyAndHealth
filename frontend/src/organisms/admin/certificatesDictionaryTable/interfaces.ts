import { CertificateDto } from '../../../api/models/Certificate';

export interface CertificatesDictionaryTableProps {
    data: CertificateDto[];

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;

    onRowAdd: (entity: CertificateDto) => void;

    onRowUpdate: (entity: CertificateDto) => void;

    onRowDelete: (entity: CertificateDto) => void;
}