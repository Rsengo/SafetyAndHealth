import { BriefingJournalRecordDto } from '../../api/models/BriefingJournalRecord';

export const mockBriefingJournal: BriefingJournalRecordDto[] = [
    {
        user: {
            id: '0000-0000-0000-0000',
            email: 'example@example.ru',
            userName: 'user_1',
            firstName: 'Name',
            lastName: 'Surname1',
            birthdayDate: new Date()
        },
        briefing: {
            id: 1,
            name: 'Первичный инструктаж по охране труда',
            description: 'some briefing',
            created: new Date(),
            instructor: {
                id: '0000-0000-0000-0001',
                email: 'example@example.ru',
                userName: 'user_1',
                firstName: 'Name',
                lastName: 'Instructor1',
                birthdayDate: new Date()
            },
            textFile: {
                id: 1,
                name: 'some_file.docx'
            },
            type: {
                id: 1,
                name: 'Первичный инструктаж'
            }
        },
        dateOfPassage: new Date(),
        activationDate: new Date()
    },
    {
        user: {
            id: '0000-0000-0000-0002',
            email: 'example22222@example.ru',
            userName: 'user_2',
            firstName: 'Name',
            lastName: 'Surname2',
            birthdayDate: new Date()
        },
        briefing: {
            id: 2,
            name: 'Вторичный инструктаж по охране труда',
            created: new Date(),
            instructor: {
                id: '0000-0000-0000-0001',
                email: 'example@example.ru',
                userName: 'user_1',
                firstName: 'Name',
                lastName: 'Instructor1',
                birthdayDate: new Date()
            },
            textFile: {
                id: 2,
                name: 'some_file2.docx'
            },
            type: {
                id: 1,
                name: 'Вторичный инструктаж'
            }
        },
        activationDate: new Date()
    }
];