import { BriefingDto } from '../../api/models/Briefing';

export const briefings: BriefingDto[] = [
    {
        id: 1,
        name: 'Первичный инструктаж',
        description: 'Первичный инструктаж по охране труда',
        created: new Date(),
        textFile: {
            id: 1,
            name: 'some_file.txt'
        },
        instructor: {
            id: '0000-0000-0000-0000',
            email: 'my_email@example.com',
            firstName: 'First',
            lastName: 'Last',
            middleName: 'Middle',
            userName: 'admin',
            birthdayDate: new Date()
        },
        type: {
            id: 1, 
            name: 'Первичный инструктаж'
        }
    },
    {
        id: 1,
        name: 'Повторный инструктаж',
        description: 'Повторный инструктаж по охране труда',
        created: new Date(),
        textFile: {
            id: 1,
            name: 'some_file.txt'
        },
        instructor: {
            id: '0000-0000-0000-0000',
            email: 'my_email@example.com',
            firstName: 'First',
            lastName: 'Last',
            middleName: 'Middle',
            userName: 'admin',
            birthdayDate: new Date()
        },
        mediaUrl: 'https://some_url.com',
        type: {
            id: 1, 
            name: 'Повторный инструктаж'
        }
    },
];