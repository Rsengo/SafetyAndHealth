import { UserCertificateDto } from "../../../api/models/UserCertificate";
import { UserProtocolDto } from "../../../api/models/UserProtocol";
import { CertificateDto } from "../../../api/models/Certificate";
import { UiActionDescription } from "../../../types/uiActionDescription";

export interface DocumentsListItem {
    userCertificate?: UserCertificateDto;

    userProtocol?: UserProtocolDto;

    certificate: CertificateDto;
}

export interface DocumentsListProps {
    documents: DocumentsListItem[];

    actions?: UiActionDescription[];

    onCertificateClick: (certificate: UserCertificateDto) => void

    onProtocolClick: (protocol: UserProtocolDto) => void
}