import React, { FC } from 'react';
import { CardsListTemplateProps } from './interfaces';
import {
    CardsListTemplateContainer,
    CardsListTemplateContentContainer,
    CardsListTemplateActionsContainer
} from './styles';

// TODO: should be an organism?
const CardsListTemplate: FC<CardsListTemplateProps> = ({
    children,
    actions
}) => {
    return (
        <CardsListTemplateContainer>
            <CardsListTemplateContentContainer>
                {children}
            </CardsListTemplateContentContainer>
            <CardsListTemplateActionsContainer>
                {actions}
            </CardsListTemplateActionsContainer>
        </CardsListTemplateContainer>
    );
}

export default CardsListTemplate;