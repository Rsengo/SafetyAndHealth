import { SideMenuOpenAction, SideMenuCloseAction, SIDE_MENU_OPEN, SIDE_MENU_CLOSE } from "./types";

export const sideMenuOpen = (): SideMenuOpenAction => ({
    type: SIDE_MENU_OPEN,
    payload: null
});

export const sideMenuClose = (): SideMenuCloseAction => ({
    type: SIDE_MENU_CLOSE,
    payload: null
});