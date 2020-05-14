import React, { FC } from 'react';
import { CertificateCardProps } from './interfaces';
import { Typography, Button } from '@material-ui/core';
import dayjs from 'dayjs';
import { ButtonSection, StyledCard } from './styles';

const CertificateCard: FC<CertificateCardProps> = ({
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
        <StyledCard className={className}>
            <Typography variant='h5'>
                {certificate.name}
            </Typography>
            <Typography variant='subtitle2'>
                Дата истечения сертификата: {certificateExpiresDate}
            </Typography>
            <Typography variant='subtitle2'>
                Дата истечения протокола: {protocolExpiresDate}
            </Typography>
            <ButtonSection>
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
            </ButtonSection>
        </StyledCard>
    );
}

export default CertificateCard;