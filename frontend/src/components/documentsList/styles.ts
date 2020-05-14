import { styled, Fab } from "@material-ui/core";

export const DocumentsListContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: 1
});

export const DocumentsListContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1
});

export const DocumentsListActionsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
});

export const StyledFab = styled(Fab)({
    margin: '0 8px' // TODO
});