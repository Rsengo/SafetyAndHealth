import React, { FC } from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import UserCard from '../../organisms/userCard/UserCard';
import DocumentsList from '../../organisms/documentsList/DocumentsList';
import { docsData } from './mockData';
import { Drawer } from '@material-ui/core';
import UserDocumentsTemplate from '../../templates/userDocumentsTemplate/UserDocumentsTemplate';

const UserDocuments: FC = () => {
    return (
        <Drawer anchor='right' open onClose={() => {}} variant='temporary'>
            <UserDocumentsTemplate
                userCard={(
                    <UserCard
                        firstName="f_name"
                        lastName="l_name"
                        middleName="m_name"
                        email="example@exam.com"
                        contactPhoneNumber="+7-999-888-77-66"
                        position="admin"
                    />
                )}
            >
                <DocumentsList
                    documents={docsData}
                    actions={[
                    {
                        icon: (<NoteAddIcon />),
                        tooltip: 'Добавить документ',
                        onClick: () => {'Fab clicked'}
                    },
                    {
                        icon: (<GetAppIcon />),
                        text: 'Скачать все',
                        onClick: () => {'Fab clicked'}
                    }
                    ]}
                    onCertificateClick={() => {}}
                    onProtocolClick={() => {}}
                />
            </UserDocumentsTemplate>
        </Drawer>
    );
}

export default UserDocuments;