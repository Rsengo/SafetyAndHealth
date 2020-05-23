import React, { FC } from 'react';
import DictionariesList from '../../organisms/dictionariesList/DictionariesList';
import DictionariesAdministrationTemplate from '../../templates/dictionariesAdministrationTemplate/DictionariesAdministrationTemplate';
import { Switch, Route, useRouteMatch, useHistory, Redirect } from 'react-router';
import CertificatesDictionaryTableModule from '../certificatesDictionaryTable/CertificatesDictionaryTableModule';
import PositionsDictionaryTableModule from '../positionsDictionaryTable/PositionsDictionaryTableModule';
import { DictionaryType } from '../../organisms/dictionariesList/dictionaryType';

const DictionariesAdministration: FC = () => {
    const [type, setType] = React.useState<DictionaryType>('positions');

    const match = useRouteMatch();
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
                    onItemClick={onItemClick}
                />
            )}
        >
            <Switch>
                <Route exact path={'/dictionaries'}>
                    <Redirect to={`/dictionaries/${type}`} />
                </Route>
                <Route path={`${match.path}/positions`} component={PositionsDictionaryTableModule} />
                <Route path={`${match.path}/certificates`} component={CertificatesDictionaryTableModule} />
            </Switch>
        </DictionariesAdministrationTemplate>
    );
};

export default DictionariesAdministration;