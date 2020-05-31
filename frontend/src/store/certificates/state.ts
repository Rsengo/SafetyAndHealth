import { CertificateDto } from '../../api/models/Certificate';

export default interface CertificatesState {
    certificates: CertificateDto[];

    loading: boolean;
}