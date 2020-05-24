import { CertificatesTableDto } from "../../api/models/CertificatesTable";

export default interface CertificatesTableState {
    table: CertificatesTableDto | null,
    loading: boolean
}