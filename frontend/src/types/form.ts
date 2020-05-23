export type FormType = 'add' | 'edit';

export type FieldData<T extends any = any> = {
    value: T,

    error?: string;
}

export type FieldValidator<T extends any = any> = (data: T) => string | undefined;

export type FieldComparatorValidator<T extends any = any> = (...args: Array<T | undefined>) => string | undefined;