import React from 'react';
import clsx from 'clsx';

import { Drawer } from '@material-ui/core'

import { SideMenuProps } from './interfaces';
import { useStyles } from './styled';

const SideMenu: React.FC<SideMenuProps> = ({
    children,
    open
}) => {
  const classes = useStyles();

  return (
    <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
        })}
        classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
        }}
    >
        {children}
    </Drawer>
  );
};

export default SideMenu;
