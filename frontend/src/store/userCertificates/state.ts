import { UserCertificateDto } from "../../api/models/UserCertificate";

export default interface UserCertificatesState {
    userCertificates: UserCertificateDto[],
    loading: boolean
}