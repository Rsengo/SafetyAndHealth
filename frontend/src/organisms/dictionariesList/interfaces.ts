import { DictionaryType } from "./dictionaryType";

export interface DictionariesListProps {
    selectedType: DictionaryType;

    onItemClick: (dictionaryType: DictionaryType) => void;
}