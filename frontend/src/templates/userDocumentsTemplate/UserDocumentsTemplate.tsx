import React, { FC } from 'react';
import { UserDocumentsContainer, UserCardContainer, UserDocumentsListContainer } from './styles';
import { UserDocumentsTemplateProps } from './interfaces';

const UserDocumentsTemplate: FC<UserDocumentsTemplateProps> = ({
    children,
    userCard
}) => (
    <UserDocumentsContainer>
        <UserCardContainer>
            {userCard}
        </UserCardContainer>
        <UserDocumentsListContainer>
            {children}
        </UserDocumentsListContainer>
    </UserDocumentsContainer>
)

export default UserDocumentsTemplate;