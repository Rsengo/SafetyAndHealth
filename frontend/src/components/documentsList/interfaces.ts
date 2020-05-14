import { UserCertificateDto } from "../../api/models/UserCertificate";
import { UserProtocolDto } from "../../api/models/UserProtocol";
import { CertificateDto } from "../../api/models/Certificate";

export interface DocumentsListItem {
    userCertificate?: UserCertificateDto;

    userProtocol?: UserProtocolDto;

    certificate: CertificateDto;
}

export interface DocumentsListAction {
    icon: React.ReactNode;

    tooltip?: string;

    text?: string

    onClick: () => void;
}

export interface DocumentsListProps {
    documents: DocumentsListItem[];

    actions?: DocumentsListAction[];

    onCertificateClick: (certificate: UserCertificateDto) => void

    onProtocolClick: (protocol: UserProtocolDto) => void
}