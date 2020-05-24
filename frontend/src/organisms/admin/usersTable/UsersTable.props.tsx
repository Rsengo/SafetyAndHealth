import React from 'react';
import dayjs from 'dayjs';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import {Column, Action} from 'material-table';
import { UserTableEntity } from './interfaces';
import FormatConstants from '../../../constants/FormatConstants.json';

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
        field: 'birthdayDate',
        title: 'Дата рождения',
        render: (data: UserTableEntity) => dayjs(data.birthdayDate).format(FormatConstants.dateFormat)
    },
    {
        field: 'contactPhoneNumber',
        title: 'Телефон'
    }
];

export const actions: Action<UserTableEntity>[] = [
    {
        icon: () => (<PersonAddIcon />),
        tooltip: 'Добавить пользователя',
        isFreeAction: true,
        onClick: () => alert("You want to add a new row")
    },
    {
        icon: () => (<DescriptionIcon />),
        tooltip: 'Документы пользователя',
        onClick: () => alert("You want to edit the row")
    },
    {
        icon: () => (<DeleteOutlineIcon color='error' />),
        tooltip: 'Удалить пользователя',
        onClick: () => alert("You want to delete the row")
    }
];