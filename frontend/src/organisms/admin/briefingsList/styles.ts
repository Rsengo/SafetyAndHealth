import { styled, Fab } from '@material-ui/core';
import BriefingCard from '../briefingCard/BriefingCard';

export const StyledFab = styled(Fab)({
    margin: '0 8px' // TODO
});

export const StyledBriefingCard = styled(BriefingCard)({
    margin: 8,
    height: 'fit-content'
});