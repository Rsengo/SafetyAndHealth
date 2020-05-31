import { DictionaryType } from './dictionaryType';

export interface DictionariesListNameMap {
    [index: string]: string | undefined;
};

export interface DictionariesListProps {
    selectedType: DictionaryType;

    dictionaries: DictionariesListNameMap;

    onItemClick: (dictionaryType: DictionaryType) => void;
}