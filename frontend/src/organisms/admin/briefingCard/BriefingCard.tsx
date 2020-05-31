import React, { FC } from 'react';
import { Card, CardContent, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { BriefingCardProps } from './interfaces';
import { getInitials } from '../../../utils/userUtils';
import { toUiDate } from '../../../utils/dateUtils';
import DescriptionTextBlock from '../../../molecules/descriptionTextBlock/DescriptionTextBlock';

const BriefingCard: FC<BriefingCardProps> = ({
    className,
    briefing
}) => {
    return (
        <Card className={className}>
            <CardContent>
                <Typography gutterBottom variant='h5'>{briefing.name}</Typography>
                <Typography gutterBottom variant='subtitle2'>{briefing.description}</Typography>
                <DescriptionTextBlock>Тип: {briefing.type.name}</DescriptionTextBlock>
                <DescriptionTextBlock>Дата публикации: {toUiDate(briefing.created)}</DescriptionTextBlock>
                <DescriptionTextBlock>ФИО инструктора: {getInitials(briefing.instructor)}</DescriptionTextBlock>
                <FormControlLabel
                    control={<Checkbox checked={Boolean(briefing.mediaUrl)} indeterminate={!briefing.mediaUrl} disabled />}
                    label="Ссылка на медиа"
                />
            </CardContent>
        </Card>
    );
};

export default BriefingCard;