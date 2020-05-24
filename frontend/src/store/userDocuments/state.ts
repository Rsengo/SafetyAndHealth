import { UserCertificateDto } from "../../api/models/UserCertificate";
import { UserProtocolDto } from "../../api/models/UserProtocol";

export default interface UserDocumentsState {
    userCertificates: UserCertificateDto[],
    userProtocols: UserProtocolDto[],
    userCertificatesLoading: boolean,
    userProtocolsLoading: boolean
}