import { TableRowDto } from './TableModel';

export default interface CertificatesTableDto {
    headers: TableRowDto[];

    data: TableRowDto[];
}