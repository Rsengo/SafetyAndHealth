import { styled } from "@material-ui/core";

export const CardsListTemplateContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: 1
});

export const CardsListTemplateContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
});

export const CardsListTemplateActionsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'sticky',
    margin: '10px 0' // TODO
});