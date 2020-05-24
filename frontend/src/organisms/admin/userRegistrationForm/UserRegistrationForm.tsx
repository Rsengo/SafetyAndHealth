import React, { FC } from 'react';
import { UserRegistrationFormProps } from './interfaces';
import { UserInfoFormContainer } from './styles';
import { TextField } from '@material-ui/core';
import { Autocomplete, RenderInputParams } from '@material-ui/lab';
import { PositionDto } from '../../../api/models/Position';

const UserRegistrationForm: FC<UserRegistrationFormProps> = ({
    userInfo,
    positions,
    onFieldChanged
}) => {
    const currentPosition: PositionDto | undefined = React.useMemo( // TODO type
        () => positions.find(({id}) => id === userInfo.positionId.value),
        [userInfo.positionId.value, positions]);

    const fieldChangedHandler = React.useCallback((
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        onFieldChanged(name, { value }); //TODO validation
    }, [onFieldChanged]);

    const positionChangeHandler = React.useCallback((_: React.ChangeEvent<{}>, value: PositionDto | null) => { // TODO type
        onFieldChanged('positionId', { value: value?.id }); //TODO validation
    }, [onFieldChanged]);

    return (
        <UserInfoFormContainer>
            <TextField
                fullWidth
                required
                id='user-name'
                name='userName'
                label='Логин'
                margin='dense'
                helperText={userInfo.userName.error}
                error={Boolean(userInfo.userName.error)}
                value={userInfo.userName.value || ''}
                onChange={fieldChangedHandler}
            />
            <TextField
                fullWidth
                required
                id='password'
                name='password'
                label='Пароль'
                margin='dense'
                helperText={userInfo.password.error}
                error={Boolean(userInfo.password.error)}
                value={userInfo.password.value || ''}
                onChange={fieldChangedHandler}
            />
            <TextField
                fullWidth
                required
                id='confirm-password'
                name='confirmPassword'
                label='Подтвердите пароль'
                margin='dense'
                helperText={userInfo.confirmPassword.error}
                error={Boolean(userInfo.confirmPassword.error)}
                value={userInfo.confirmPassword.value || ''}
                onChange={fieldChangedHandler}
            />
            <Autocomplete 
                id='position'
                fullWidth
                options={positions}
                getOptionLabel={(option: PositionDto): string => option.name}  // TODO: other type
                value={currentPosition}
                onChange={positionChangeHandler}
                renderInput={(params: RenderInputParams) => (
                    <TextField
                        {...params}
                        margin='dense'
                        name='positionId'
                        required
                        label='Должность'
                        helperText={userInfo.positionId.error}
                        error={Boolean(userInfo.positionId.error)}
                    />
                )}
            />
            <TextField
                fullWidth
                required
                id='email'
                name='email'
                label='Email'
                margin='dense'
                helperText={userInfo.email.error}
                error={Boolean(userInfo.email.error)}
                value={userInfo.email.value || ''}
                onChange={fieldChangedHandler}
            />
            <TextField
                fullWidth
                required
                id='first-name'
                name='firstName'
                label='Имя'
                margin='dense'
                helperText={userInfo.firstName.error}
                error={Boolean(userInfo.firstName.error)}
                value={userInfo.firstName.value || ''}
                onChange={fieldChangedHandler}
            />
            <TextField
                fullWidth
                required
                id='last-name'
                name='lastName'
                label='Фамилия'
                margin='dense'
                helperText={userInfo.lastName.error}
                error={Boolean(userInfo.lastName.error)}
                value={userInfo.lastName.value || ''}
                onChange={fieldChangedHandler}
            />
            <TextField
                fullWidth
                id='middle-name'
                name='middleName'
                label='Отчество'
                helperText={userInfo.middleName.error}
                error={Boolean(userInfo.middleName.error)}
                value={userInfo.middleName.value || ''}
                onChange={fieldChangedHandler}
            />
            <TextField
                fullWidth
                id='contact-phone'
                name='contactPhoneNumber'
                label='Телефон'
                margin='dense'
                helperText={userInfo.contactPhoneNumber.error}
                error={Boolean(userInfo.contactPhoneNumber.error)}
                value={userInfo.contactPhoneNumber.value || ''}
                onChange={fieldChangedHandler}
            />
        </UserInfoFormContainer>
    );
};

export default UserRegistrationForm;