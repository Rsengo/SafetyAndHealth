import React, { FC } from 'react';
import clsx from 'clsx';

import { useStyles } from './styled';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const CustomAppBar: FC<any> = ({
    sideMenuOpened,
    onSideMenuOpen
}) => {
    const classes = useStyles();

    // TODO: fix as soon as possible
    const styles: any = { 
        zIndex: 1201,
    };

    if (sideMenuOpened) {
        styles.width = `calc(100% - 240px)`
    }

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: sideMenuOpened,
            })}
            style={styles}
        >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onSideMenuOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                    [classes.hide]: sideMenuOpened,
                })}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Mini variant drawer
            </Typography>
        </Toolbar>
    </AppBar>
    )
}

export default CustomAppBar;
