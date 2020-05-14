import React, { FC } from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import UserCard from '../../components/organisms/userCard/UserCard';
import DocumentsList from '../../components/organisms/documentsList/DocumentsList';
import { docsData } from './mockData';
import { UserDocumentsContainer, UserCardContainer, UserDocumentsListContainer } from './styles';
import { Drawer } from '@material-ui/core';

const UserDocuments: FC = () => {
    return (
        <Drawer anchor='right' open onClose={() => {}} variant='temporary'>
            <UserDocumentsContainer>
                <UserCardContainer>
                    <UserCard
                        firstName="f_name"
                        lastName="l_name"
                        middleName="m_name"
                        email="example@exam.com"
                        contactPhoneNumber="+7-999-888-77-66"
                        position="admin"
                    />
                </UserCardContainer>
                <UserDocumentsListContainer>
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
                </UserDocumentsListContainer>
            </UserDocumentsContainer>
        </Drawer>
    );
}

export default UserDocuments;