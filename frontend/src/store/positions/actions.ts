import * as types from './types';
import { PositionDto, PositionCreateUpdateDto } from '../../api/models/Position';

export const loadPositions = (): types.LoadPositionsAction => ({
    type: types.LOAD_POSITIONS,
    payload: null
});

export const loadPositionsSuccess = (positions: PositionDto[]): types.LoadPositionsSuccessAction => ({
    type: types.LOAD_POSITIONS_SUCCESS,
    payload: positions
});

export const loadPositionsError = (): types.LoadPositionsErrorAction => ({
    type: types.LOAD_POSITIONS_ERROR,
    payload: null
});

export const createPosition = (position: PositionCreateUpdateDto): types.CreatePositionsAction => ({
    type: types.CREATE_POSITION,
    payload: position
});

export const updatePosition = (position: PositionCreateUpdateDto): types.UpdatePositionsAction => ({
    type: types.UPDATE_POSITION,
    payload: position
});

export const deletePosition = (positionId: number): types.DeletePositionsAction => ({
    type: types.DELETE_POSITION,
    payload: positionId
});