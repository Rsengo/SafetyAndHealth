import React, { FC } from 'react';
import { DocumentsListProps, DocumentsListItem } from './interfaces';
import { StyledFab, StyledDocumentCard } from './styles';
import { Tooltip } from '@material-ui/core';
import { UiActionDescription } from '../../../types/uiActionDescription';
import CardsListTemplate from '../../../templates/cardsListTemplate/CardListTemplate';

const DocumentsList: FC<DocumentsListProps> = ({
    documents,
    actions,
    onCertificateClick,
    onProtocolClick
}) => {
    // TODO func to callback
    // TODO if no both userProtocol and userCertificate
    return (
        <CardsListTemplate
            actions={(
                actions?.map((action: UiActionDescription, idx: number) => (
                    <Tooltip hidden title={action.tooltip || ''}>
                        <StyledFab 
                            key={idx} 
                            onClick={action.onClick} 
                            variant={action.text ? 'extended' : 'round'}
                        >
                            {action.icon}
                            {action.text}
                        </StyledFab>
                    </Tooltip>
                ))
            )}
        >
            {
                documents.map(({userCertificate, userProtocol, certificate}: DocumentsListItem) => (
                    <StyledDocumentCard
                        key={certificate.id}
                        certificate={certificate}
                        userProtocol={userProtocol}
                        userCertificate={userCertificate}
                        onCertificateClick={userCertificate && (() => onCertificateClick(userCertificate))}
                        onProtocolClick={userProtocol && (() => onProtocolClick(userProtocol))}
                    />
                ))
            }
        </CardsListTemplate>
    );
}

export default DocumentsList;