import { ReduxAction } from '../interfaces';

export const SIDE_MENU_OPEN: string = 'SIDE_MENU_OPEN';
export const SIDE_MENU_CLOSE: string = 'SIDE_MENU_CLOSE';

export interface SideMenuOpenAction extends ReduxAction<null> {}
export interface SideMenuCloseAction extends ReduxAction<null> {}

export type NavigationActionTypes = SideMenuOpenAction | SideMenuCloseAction;