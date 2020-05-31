import { ArrayElementType } from "../../../types/array";

export const DictionaryTypes = [
    'positions',
    'certificates',
    'briefingTypes'
] as const;

export type DictionaryType = ArrayElementType<typeof DictionaryTypes>;