import React from 'react';
import AddBox from '@material-ui/icons/AddBox';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import {Column, Action} from 'material-table';
import { UserTableEntity } from './interfaces';

export const title: string = 'Пользователи системы';

export const columns: Column<UserTableEntity>[] = [
    {
        field: 'name',
        title: 'ФИО',
        render: (data: UserTableEntity): string => data.middleName 
            ? `${data.lastName} ${data.firstName[0]}. ${data.middleName[0]}.` 
            : `${data.lastName} ${data.firstName[0]}.`
    },
    {
        field: 'userName',
        title: 'Логин'
    },
    {
        field: 'email',
        title: 'Email'
    },
    {
        field: 'position',
        title: 'Должность'
    },
    {
        field: 'contactPhoneNumber',
        title: 'Телефон'
    }
];

export const actions: Action<UserTableEntity>[] = [
    {
        icon: () => (<AddBox />),
        tooltip: 'Добавить пользователя',
        isFreeAction: true,
        onClick: () => alert("You want to add a new row")
    },
    {
        icon: () => (<Edit />),
        tooltip: 'Редактировать пользователя',
        onClick: () => alert("You want to edit the row")
    },
    {
        icon: () => (<DeleteOutline color='error' />),
        tooltip: 'Удалить пользователя',
        onClick: () => alert("You want to delete the row")
    }
];