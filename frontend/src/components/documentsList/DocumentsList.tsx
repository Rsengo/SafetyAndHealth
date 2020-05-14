import React, { FC } from 'react';
import { DocumentsListProps, DocumentsListItem, DocumentsListAction } from './interfaces';
import { DocumentsListContainer, DocumentsListContentContainer, DocumentsListActionsContainer, StyledFab, StyledCertificateCard } from './styles';
import { Tooltip } from '@material-ui/core';

const DocumentsList: FC<DocumentsListProps> = ({
    documents,
    actions,
    onCertificateClick,
    onProtocolClick
}) => {
    // TODO func to callback
    // TODO if no both userProtocol and userCertificate
    return (
        <DocumentsListContainer>
            <DocumentsListContentContainer>
                {
                    documents.map(({userCertificate, userProtocol, certificate}: DocumentsListItem) => (
                        <StyledCertificateCard
                            key={certificate.id}
                            certificate={certificate}
                            userProtocol={userProtocol}
                            userCertificate={userCertificate}
                            onCertificateClick={userCertificate && (() => onCertificateClick(userCertificate))}
                            onProtocolClick={userProtocol && (() => onProtocolClick(userProtocol))}
                        />
                    ))
                }
            </DocumentsListContentContainer>
            <DocumentsListActionsContainer>
                {
                    actions?.map((action: DocumentsListAction, idx: number) => (
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
                }
            </DocumentsListActionsContainer>
        </DocumentsListContainer>
    );
}

export default DocumentsList;