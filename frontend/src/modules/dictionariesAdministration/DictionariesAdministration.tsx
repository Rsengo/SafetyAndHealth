import React, { FC } from 'react';
import DictionariesList from '../../organisms/admin/dictionariesList/DictionariesList';
import DictionariesAdministrationTemplate from '../../templates/dictionariesAdministrationTemplate/DictionariesAdministrationTemplate';
import { Switch, Route, useHistory } from 'react-router';
import { DictionaryType } from '../../organisms/admin/dictionariesList/dictionaryType';
import Dictionaries from '../../constants/Dictionaries.json'; // TODO norm localization
import { getDictionaryRoutes } from '../../routes';
import { RouteDescription } from '../../types/route';

const DictionariesAdministration: FC = () => {
    const [type, setType] = React.useState<DictionaryType>('positions');
    const history = useHistory();

    const onItemClick = React.useCallback((route: DictionaryType) => {
        history.push(`/dictionaries/${route}`);
        setType(route);
    }, [history, setType]);

    return (
        <DictionariesAdministrationTemplate
            dictionariesList={(
                <DictionariesList 
                    selectedType={type}
                    dictionaries={Dictionaries}
                    onItemClick={onItemClick}
                />
            )}
        >
            <Switch>
                {
                    getDictionaryRoutes(type).map(({path, component, exact}: RouteDescription) => (
                        <Route path={path} component={component} exact={exact} />
                    ))
                }
            </Switch>
        </DictionariesAdministrationTemplate>
    );
};

export default DictionariesAdministration;