import { ReactNode } from 'react';

export interface FormDialogTemplateProps {
    open: boolean;

    onClose: () => void;

    children: ReactNode;

    actions: ReactNode;
}