import React from 'react';
import dayjs from 'dayjs';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import {Column, Action} from 'material-table';
import FormatConstants from '../../../constants/FormatConstants.json';
import { getInitials } from '../../../utils/userUtils';
import { UserDto } from '../../../api/models/User';

export const title: string = 'Пользователи системы';

export const columns: Column<UserDto>[] = [
    {
        field: 'name',
        title: 'ФИО',
        render: (data: UserDto): string => getInitials(data)
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
        title: 'Должность',
        render: (data: UserDto) => data.position?.name
    },
    {
        field: 'birthdayDate',
        title: 'Дата рождения',
        render: (data: UserDto) => dayjs(data.birthdayDate).format(FormatConstants.dateFormat)
    },
    {
        field: 'contactPhoneNumber',
        title: 'Телефон'
    }
];

export const actions: Action<UserDto>[] = [
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