import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import UserRegistrationForm from '../../organisms/userRegistrationForm/UserRegistrationForm';
import { UserRegistrationInfo } from '../../organisms/userRegistrationForm/interfaces';
import { FieldData } from '../../types/form';
import FormDialogTemplate from '../../templates/formDialogTemplate/FormDialogTemplate';

const UserRegistration: FC = () => {
    const [userInfo, setUserInfo] = React.useState<UserRegistrationInfo>({
        email: {
            value: null
        },
        userName: {
            value: null
        },
        password: {
            value: null
        },
        confirmPassword: {
            value: null
        },
        positionId: {
            value: null
        },
        firstName: {
            value: null
        },
        middleName: {
            value: null
        },
        lastName: {
            value: null
        },
        contactPhoneNumber: {
            value: null
        },
    });

    const onFieldChanged = React.useCallback((field: string, value: FieldData<any>) => {
        setUserInfo((state: UserRegistrationInfo) => ({
            ...state,
            [field]: {
                ...state[field],
                ...value
            }
        }));
    }, []);

    return (
        <FormDialogTemplate
            open
            onClose={() => {}}
            actions={(
                <React.Fragment>
                    <Button>Создать</Button>
                    <Button>Отмена</Button>
                </React.Fragment>
            )}
        >
            <UserRegistrationForm
                positions={[
                    {
                        id: 1,
                        name: 'Админ'
                    }, 
                    {
                        id: 2,
                        name: 'Сотрудник'
                    }
                ]}
                userInfo={userInfo}
                onFieldChanged={onFieldChanged}
            />
        </FormDialogTemplate>
    );
};

export default UserRegistration;