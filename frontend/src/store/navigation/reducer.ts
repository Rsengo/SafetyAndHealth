import { Reducer } from 'redux';
import NavigationState from './state';
import PreloadedState from '../../constants/PreloadedState.json';
import { NavigationActionTypes, SIDE_MENU_OPEN, SIDE_MENU_CLOSE } from './types';

const reducer: Reducer<NavigationState, NavigationActionTypes> = (
    state: NavigationState = PreloadedState.navigation,
    action: NavigationActionTypes
) => {
    switch (action.type) {
        case SIDE_MENU_OPEN:
            return { ...state, sideMenuOpen: true };
        
        case SIDE_MENU_CLOSE:
            return { ...state, sideMenuOpen: false };

        default:
            return { ...state };
    }
};

export default reducer;