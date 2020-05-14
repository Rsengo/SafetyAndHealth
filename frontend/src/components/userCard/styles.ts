import { styled, Paper } from "@material-ui/core";

// TODO: relative units

export const UserCardContainer = styled(Paper)({ // TODO to column if mobile
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
});

export const UserAvatarContainer = styled('div')({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const UserInfoConatiner = styled('div')({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px'

});