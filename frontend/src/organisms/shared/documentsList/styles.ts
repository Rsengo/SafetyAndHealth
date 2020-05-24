import { styled, Fab } from "@material-ui/core";
import DocumentCard from "../documentCard/DocumentCard";

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
    justifyContent: 'flex-end',
    position: 'sticky',
    margin: '10px 0' // TODO
});

export const StyledFab = styled(Fab)({
    margin: '0 8px' // TODO
});

export const StyledDocumentCard = styled(DocumentCard)({
    margin: 8,
    height: 'fit-content'
});