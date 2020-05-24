export interface CertificatesDictionaryTableEntity {
    id: number;

    name: string;

    validationTime: number;

    hasGroup: boolean;
}

export interface CertificatesDictionaryTableProps {
    data: CertificatesDictionaryTableEntity[];

    isLoading?: boolean;

    onSearchChange: (value: string) => void;

    searchValue: string;

    onRowAdd: (entity: CertificatesDictionaryTableEntity) => void;

    onRowUpdate: (entity: CertificatesDictionaryTableEntity) => void;

    onRowDelete: (entity: CertificatesDictionaryTableEntity) => void;
}