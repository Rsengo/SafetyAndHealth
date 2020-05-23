import { styled, Paper } from "@material-ui/core";

export const DictionariesAdministrationTemplateContainer = styled('div')({
    display: 'flex',
    flex: 1
});

export const DictionariesAdministrationTemplateListContainer = styled(Paper)({
    minWidth: '15%',
    minHeight: '50vh' // TODO
});

export const DictionariesAdministrationTemplateTableContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 8, // TODO
    paddingLeft: 16 // TODO
});