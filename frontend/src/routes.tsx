import React from 'react';
import { RouteDescription } from './types/route';
import UsersAdministration from './modules/usersAdministration/UsersAdministration';
import UserDocuments from './modules/userDocuments/UserDocuments';
import CertificatesTable from './modules/certificatesTable/CertificatesTable';
import DictionariesAdministration from './modules/dictionariesAdministration/DictionariesAdministration';
import UserRegistration from './modules/userRegistration/UserRegistration';
import BriefingsLibrary from './modules/briefingsLibrary/BriefingsLibrary';
import { Redirect } from 'react-router-dom';
import { DictionaryType } from './organisms/admin/dictionariesList/dictionaryType';
import CertificatesDictionaryTableModule from './modules/certificatesDictionaryTable/CertificatesDictionaryTableModule';
import PositionsDictionaryTableModule from './modules/positionsDictionaryTable/PositionsDictionaryTableModule';
import BriefingTypesDictionaryTable from './modules/briefingTypesDictionaryTable/BriefingTypesDictionaryTableModule';
import BriefingJournal from './modules/briefingJournal/BriefingJournal';

export const rootRoutes: RouteDescription[] = [
    {
        path: '/users',
        component: UsersAdministration
    },
    {
        path: '/userDocuments',
        component: UserDocuments
    },
    {
        path: '/certificatesTable',
        component: CertificatesTable
    },
    {
        path: '/dictionaries',
        component: DictionariesAdministration
    },
    {
        path: '/userRegistration',
        component: UserRegistration
    },
    {
        path: '/briefingsLibrary',
        component: BriefingsLibrary
    },
    {
        path: '/briefingJournal',
        component: BriefingJournal
    },
    {
        path: '/',
        exact: true,
        component: () => <Redirect to='/users' />
    }
];

export const getDictionaryRoutes = (defaultType: DictionaryType): RouteDescription[] => ([
    {
        exact: true,
        path: '/dictionaries',
        component: () => <Redirect to={`/dictionaries/${defaultType}`} />
    },
    {
        path: '/dictionaries/positions',
        component: PositionsDictionaryTableModule
    },
    {
        path: '/dictionaries/certificates',
        component: CertificatesDictionaryTableModule
    },
    {
        path: '/dictionaries/briefingTypes',
        component: BriefingTypesDictionaryTable
    },
]);