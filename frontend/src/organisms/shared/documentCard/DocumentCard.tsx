import React, { FC } from 'react';
import { DocumentCardProps } from './interfaces';
import { Typography, Button, CardActions, CardContent, Card } from '@material-ui/core';
import dayjs from 'dayjs';

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

        return dayjs(userCertificate.expiresDate).format('DD.MM.YYYY');
    }, [userCertificate]); // TODO проверить это условие (deps)

    const protocolExpiresDate = React.useMemo(() => {
        if (!userProtocol?.expiresDate) {
            return 'отсутствует';
        }

        return dayjs(userProtocol?.expiresDate).format('DD.MM.YYYY');
    }, [userProtocol]); // TODO проверить это условие (deps)

    // TODO inline styles
    return (
        <Card className={className}>
            <CardContent>
                <Typography gutterBottom variant='h5'>
                    {certificate.name}
                </Typography>
                <Typography variant='subtitle2'>
                    Дата истечения сертификата: {certificateExpiresDate}
                </Typography>
                <Typography variant='subtitle2'>
                    Дата истечения протокола: {protocolExpiresDate}
                </Typography>
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