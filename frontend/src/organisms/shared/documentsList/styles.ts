import { styled, Fab } from '@material-ui/core';
import DocumentCard from '../documentCard/DocumentCard';

export const StyledFab = styled(Fab)({
    margin: '0 8px' // TODO
});

export const StyledDocumentCard = styled(DocumentCard)({
    margin: 8,
    height: 'fit-content'
});