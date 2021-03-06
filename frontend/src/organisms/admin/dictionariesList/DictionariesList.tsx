import React, { FC } from 'react';
import { DictionariesListProps } from './interfaces';
import { DictionaryTypes } from './dictionaryType';
import { List, ListItem, ListItemText } from '@material-ui/core';

const DictionariesList: FC<DictionariesListProps> = ({
    selectedType,
    dictionaries,
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
                        <ListItemText primary={dictionaries[type]} />
                    </ListItem>
                ))
            }
        </List>
    );
};

export default DictionariesList;