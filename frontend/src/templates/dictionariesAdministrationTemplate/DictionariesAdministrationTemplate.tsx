import React, { FC } from 'react';
import { DictionariesAdministrationTemplateProps } from './interfaces';
import { 
    DictionariesAdministrationTemplateListContainer, 
    DictionariesAdministrationTemplateContainer, 
    DictionariesAdministrationTemplateTableContainer
} from './styles';

const DictionariesAdministrationTemplate: FC<DictionariesAdministrationTemplateProps> = ({
    dictionariesList,
    children
}) => (
    <DictionariesAdministrationTemplateContainer>
        <DictionariesAdministrationTemplateListContainer>
            {dictionariesList}
        </DictionariesAdministrationTemplateListContainer>
        <DictionariesAdministrationTemplateTableContainer>
            {children}
        </DictionariesAdministrationTemplateTableContainer>
    </DictionariesAdministrationTemplateContainer>
);

export default DictionariesAdministrationTemplate;