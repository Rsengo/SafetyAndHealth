import React, { FC } from 'react';
import { BriefingsListProps } from './interfaces';
import { Tooltip } from '@material-ui/core';
import { UiActionDescription } from '../../../types/uiActionDescription';
import CardsListTemplate from '../../../templates/cardsListTemplate/CardListTemplate';
import { StyledFab, StyledBriefingCard } from './styles';
import { BriefingDto } from '../../../api/models/Briefing';

const BriefingsList: FC<BriefingsListProps> = ({
    briefings,
    actions,
    onEditClick
}) => {
    // TODO func to callback
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
                briefings.map((briefing: BriefingDto) => (
                    <StyledBriefingCard
                        key={briefing.id}
                        briefing={briefing}
                        onEditClick={() => onEditClick(briefing)}
                    />
                ))
            }
        </CardsListTemplate>
    );
}

export default BriefingsList;