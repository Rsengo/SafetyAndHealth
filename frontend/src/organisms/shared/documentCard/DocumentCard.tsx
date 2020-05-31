import React, { FC } from 'react';
import { DocumentCardProps } from './interfaces';
import { Typography, Button, CardActions, CardContent, Card } from '@material-ui/core';
import { toUiDate } from '../../../utils/dateUtils';
import DescriptionTextBlock from '../../../molecules/descriptionTextBlock/DescriptionTextBlock';

const DocumentCard: FC<DocumentCardProps> = ({
    certificate,
    userCertificate,
    userProtocol,
    onCertificateClick,
    onProtocolClick,
    className
}) => {
    const certificateExpiresDate = React.useMemo(() => {
        if (!userCertificate?.expiresDate) {
            return 'отсутствует';
        }

        return toUiDate(userCertificate?.expiresDate);
    }, [userCertificate]); // TODO проверить это условие (deps)

    const protocolExpiresDate = React.useMemo(() => {
        if (!userProtocol?.expiresDate) {
            return 'отсутствует';
        }

        return toUiDate(userProtocol?.expiresDate);
    }, [userProtocol]); // TODO проверить это условие (deps)

    // TODO inline styles
    return (
        <Card className={className}>
            <CardContent>
                <Typography gutterBottom variant='h5'>{certificate.name}</Typography>
                <DescriptionTextBlock>Дата истечения сертификата: {certificateExpiresDate}</DescriptionTextBlock>
                <DescriptionTextBlock>Дата истечения протокола: {protocolExpiresDate}</DescriptionTextBlock>
            </CardContent>
            <CardActions>
            {
                    userCertificate && (
                        <Button variant='outlined' onClick={onCertificateClick}>Сертификат</Button>
                    )
                }
                {
                    userProtocol && (
                        <Button variant='outlined' onClick={onProtocolClick}>Протокол</Button>
                    )
                }
            </CardActions>
        </Card>
    );
}

export default DocumentCard;