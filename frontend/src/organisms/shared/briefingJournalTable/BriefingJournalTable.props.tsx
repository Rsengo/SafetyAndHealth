import React from 'react';
import { Column, Action } from 'material-table';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { BriefingJournalRecordDto } from '../../../api/models/BriefingJournalRecord';
import { toUiDate } from '../../../utils/dateUtils';
import { getInitials } from '../../../utils/userUtils';

export const title: string = 'Журнал инструктажей'; // TODO

export const columns: Column<BriefingJournalRecordDto>[] = [
    {
        field: 'id',
        hidden: true,
        
    },
    {
        field: 'name',
        title: 'Название инструктажа',
        render: (data: BriefingJournalRecordDto): string => data.briefing.name,
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'created',
        title: 'Дата публикации',
        render: (data: BriefingJournalRecordDto): string => toUiDate(data.briefing.created),
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'created',
        title: 'Дата назначения инструктажа',
        render: (data: BriefingJournalRecordDto): string => toUiDate(data.activationDate),
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'userFullName',
        title: 'ФИО инструктируемого',
        render: (data: BriefingJournalRecordDto): string => getInitials(data.user),
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'userBirthdayDate',
        title: 'Дата рождения инструктируемого',
        render: (data: BriefingJournalRecordDto): string => toUiDate(data.user.birthdayDate),
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'instructorFullName',
        title: 'ФИО инструктора',
        render: (data: BriefingJournalRecordDto): string => getInitials(data.briefing.instructor),
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'briefingType',
        title: 'Тип инструктажа',
        render: (data: BriefingJournalRecordDto): string => data.briefing.type.name,
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    },
    {
        field: 'description',
        title: 'Оптсание инструктажа',
        render: (data: BriefingJournalRecordDto): string => data.briefing.description || '',
        cellStyle: {
            width: '100%' // TODO because of hidden column
        }
    }
];

const _passedAction = {
    icon: () => (<CheckBoxIcon style={{color: 'green'}} />),
    tooltip: 'Инструктаж пройден',
    onClick: () => {}
};

const _notPassedAction = {
    icon: () => (<CheckBoxOutlineBlankIcon />),
    tooltip: 'Отметить инструктаж как пройденый',
    onClick: () => alert("You want to pass the row")
};

export const getActions = (
    rowData: BriefingJournalRecordDto
): Action<BriefingJournalRecordDto> => {
    return rowData.dateOfPassage 
        ? { ..._passedAction }
        : { ..._notPassedAction };
};