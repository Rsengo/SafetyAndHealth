import { ReduxAction } from '../interfaces';
import { CertificatesTableDto } from '../../api/models/CertificatesTable';

export const LOAD_CERTIFICATES_TABLE: string = 'positions/LOAD_CERTIFICATES_TABLE';
export const LOAD_CERTIFICATES_TABLE_SUCCESS: string = 'positions/LOAD_CERTIFICATES_TABLE_SUCCESS';
export const LOAD_CERTIFICATES_TABLE_ERROR: string = 'positions/LOAD_CERTIFICATES_TABLE_ERROR';

export interface LoadCertificatesTableAction extends ReduxAction<null> {}
export interface LoadCertificatesTableSuccessAction extends ReduxAction<CertificatesTableDto> {}
export interface LoadCertificatesTableErrorAction extends ReduxAction<null> {}

export type CertificatesTableActionTypes = 
    LoadCertificatesTableAction |
    LoadCertificatesTableSuccessAction |
    LoadCertificatesTableErrorAction;