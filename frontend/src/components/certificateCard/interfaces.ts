import { UserCertificateDto } from "../../api/models/UserCertificate";
import { UserProtocolDto } from "../../api/models/UserProtocol";
import { CertificateDto } from "../../api/models/Certificate";

export interface CertificateCardProps {
    className?: string;

    userCertificate?: UserCertificateDto;

    userProtocol?: UserProtocolDto;

    certificate: CertificateDto;

    onCertificateClick?: () => void;

    onProtocolClick?: () => void;
}