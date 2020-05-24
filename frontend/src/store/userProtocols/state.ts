import { UserProtocolDto } from "../../api/models/UserProtocol";

export default interface UserProtocolsState {
    userProtocols: UserProtocolDto[],
    loading: boolean
}