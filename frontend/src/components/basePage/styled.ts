import { styled, Theme } from "@material-ui/core";

//TODO: set const types
export const Container = styled('div')({
    display: 'flex'
});

//TODO: set const type and prop type
export const ContentContainer = styled('div')(({theme}: { theme: Theme }) => ({
    display: 'flex',
    marginTop: 56, // TODO from theme 
    width: '100%',
    padding: 8 // TODO from theme 
}));