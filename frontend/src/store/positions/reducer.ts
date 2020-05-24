import { Reducer } from 'redux';
import * as types from './types';
import PositionsState from './state';
import PreloadedState from '../../constants/PreloadedState.json';

const reducer: Reducer<PositionsState, types.PositionsActionTypes> = (
    state: PositionsState = PreloadedState.positions,
    action: types.PositionsActionTypes
) => {
    switch (action.type) {
        case types.LOAD_POSITIONS:
            return { ...state, loading: true };
        
        case types.LOAD_POSITIONS_SUCCESS:
            const typedAction = action as types.LoadPositionsSuccessAction;
            return {
                ...state,
                positions: typedAction.payload,
                loading: false
            };

        case types.LOAD_POSITIONS_ERROR:
            return {
                ...state,
                ...PreloadedState.positions
            };
        default:
            return { ...state };
    }
};

export default reducer;