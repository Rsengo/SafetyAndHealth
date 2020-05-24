import { ArrayElementType } from "../../../types/array";

export const DictionaryTypes = [
    'positions',
    'certificates'
] as const;

export type DictionaryType = ArrayElementType<typeof DictionaryTypes>;