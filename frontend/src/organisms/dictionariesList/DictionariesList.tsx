import React, { FC } from 'react';
import { DictionariesListProps } from './interfaces';
import { DictionaryTypes } from './dictionaryType';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Dictionaries from '../../constants/Dictionaries.json'; // TODO norm localization

const DictionariesList: FC<DictionariesListProps> = ({
    selectedType,
    onItemClick
}) => {
    const selectedIndex = React.useMemo(() => {
        return DictionaryTypes.indexOf(selectedType);
    }, [selectedType]);

    return (
        <List component='nav'>
            {
                DictionaryTypes.map((type, idx) => (
                    <ListItem
                        button
                        key={type}
                        selected={idx === selectedIndex}
                        onClick={() => onItemClick(type)}
                    >
                        <ListItemText primary={Dictionaries[type]} />
                    </ListItem>
                ))
            }
        </List>
    );
};

export default DictionariesList;