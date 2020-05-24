import BaseRequester from './BaseRequester';
import ApiConstants from '../../../constants/ApiConstants.json';
import { CertificatesTableDto } from '../../models/CertificatesTable';

// TODO optimize headers request
class CertificatesTableRequester extends BaseRequester {
    getTableData(): Promise<CertificatesTableDto> {
        return this._get<CertificatesTableDto>(ApiConstants.routes.certificatesTable.getTableData);
    }
}

export default CertificatesTableRequester;