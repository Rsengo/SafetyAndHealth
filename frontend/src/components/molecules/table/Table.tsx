import React, { FC } from 'react';
import MaterialTable from 'material-table';
import icons from './Table.icons';
import { Grid } from '@material-ui/core';
import SearchField from '../searchField/SearchField';
import { isNullOrUndefined } from 'util';
import { TableProps } from './interfaces';

// TODO: refactor type
const Table: FC<Omit<TableProps<any>, 'icons'>> = (props: Omit<TableProps<any>, 'icons'>) => {
    if (props.options?.search && (isNullOrUndefined(props.searchValue) || !props.onSearchChange)) {
        throw new Error('Expected onSearchChanged and searchValue to be used with search');
    }

    return (
        <Grid container spacing={2}>
        {
            props.options?.search && (
                <Grid item xs={12}>
                    <SearchField 
                        value={props.searchValue as string} 
                        onChange={props.onSearchChange as (value: string) => void} 
                    />
                </Grid>
            )
        }
        <Grid item xs={12}>
            <MaterialTable
                {...props}
                onSearchChange={undefined}
                options={{
                    ...props.options,
                    search: false
                }}
                icons={icons}
                localization={{
                    header: {
                        actions: ''
                    }
                }}
            />
        </Grid>
    </Grid>
    )
};

export default Table;