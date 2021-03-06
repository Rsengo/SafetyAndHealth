import React, { FC } from 'react';
import CertificatesDictionaryTable from '../../organisms/admin/certificatesDictionaryTable/CertificatesDictionaryTable';
import { mockCertificatesList } from './mockData';

const CertificatesDictionaryTableModule: FC = () => (
    <CertificatesDictionaryTable
        data={mockCertificatesList}
        searchValue=''
        onSearchChange={() => {}}
        onRowAdd={() => {}}
        onRowUpdate={() => {}}
        onRowDelete={() => {}}
    />
);

export default CertificatesDictionaryTableModule;