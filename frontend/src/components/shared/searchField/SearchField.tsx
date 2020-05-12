import React, { FC, ChangeEvent } from 'react';
import { FilledInput, FormControl, InputAdornment } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { SearchFieldProps } from './interfaces';

const SearchField: FC<SearchFieldProps> = ({
    value,
    onChange
}) => {
    const onChangeCallback = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }, [onChange])

    return (
        <FormControl fullWidth>
            <FilledInput fullWidth
                id="search-field"
                value={value}
                onChange={onChangeCallback}
                startAdornment={(
                    <InputAdornment position="start">
                        <SearchOutlined fontSize='small' />
                    </InputAdornment>
                )}
            />
        </FormControl>
    );
};

export default SearchField;