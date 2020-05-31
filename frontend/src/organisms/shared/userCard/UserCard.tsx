import React, { FC } from 'react';
import { UserCardProps } from './interfaces';
import { Avatar, Typography } from '@material-ui/core';
import { UserCardContainer, UserAvatarContainer, UserInfoConatiner } from './styles';

const UserCard: FC<UserCardProps> = ({
    firstName,
    lastName,
    middleName,
    position,
    email,
    contactPhoneNumber,
    avatar
}) => {
    // TODO birthdayDate?
    return (
        <UserCardContainer>
            <UserAvatarContainer>
                <Avatar alt={firstName} src={avatar}/>
            </UserAvatarContainer>
            <UserInfoConatiner>
                <Typography>{firstName}</Typography>
                <Typography>{lastName}</Typography>
                <Typography>{middleName}</Typography>
            </UserInfoConatiner>
            <UserInfoConatiner>
                <Typography>{position}</Typography>
                <Typography>{email}</Typography>
                <Typography>{contactPhoneNumber}</Typography>
            </UserInfoConatiner>
        </UserCardContainer>
    );
}

export default UserCard;