import { CertificateDto } from '../../api/models/Certificate';

export const mockCertificatesList: CertificateDto[] = [
    {
        id: 1,
        name: 'certificate 1',
        validationTime: 100500,
        hasGroup: true
    },
    {
        id: 2,
        name: 'certificate 4',
        validationTime: 100500,
        hasGroup: false
    },
    {
        id: 3,
        name: 'certificate 4',
        validationTime: 100500,
        hasGroup: true
    },
    {
        id: 4,
        name: 'certificate 4',
        validationTime: 100500,
        hasGroup: false
    },
];