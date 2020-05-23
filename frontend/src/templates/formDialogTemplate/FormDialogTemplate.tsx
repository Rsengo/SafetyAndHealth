import React, { FC } from 'react';
import { FormDialogTemplateProps } from './interfaces';
import { Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { StyledDialogContent } from './styles';

const FormDialogTemplate: FC<FormDialogTemplateProps> = ({
    open,
    onClose,
    actions,
    children
}) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Регистрация пользователя</DialogTitle>
        <StyledDialogContent>{children}</StyledDialogContent>
        <DialogActions>{actions}</DialogActions>
    </Dialog>
);

export default FormDialogTemplate;