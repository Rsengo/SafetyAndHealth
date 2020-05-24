import { ReduxAction } from '../interfaces';
import { PositionDto, PositionCreateUpdateDto } from '../../api/models/Position';

export const LOAD_POSITIONS: string = 'positions/LOAD_POSITIONS';
export const LOAD_POSITIONS_SUCCESS: string = 'positions/LOAD_POSITIONS_SUCCESS';
export const LOAD_POSITIONS_ERROR: string = 'positions/LOAD_POSITIONS_ERROR';

export interface LoadPositionsAction extends ReduxAction<null> {}
export interface LoadPositionsSuccessAction extends ReduxAction<PositionDto[]> {}
export interface LoadPositionsErrorAction extends ReduxAction<null> {}

export const CREATE_POSITION: string = 'positions/CREATE_POSITION';
export const UPDATE_POSITION: string = 'positions/UPDATE_POSITION';
export const DELETE_POSITION: string = 'positions/DELETE_POSITION';

export interface CreatePositionsAction extends ReduxAction<PositionCreateUpdateDto> {}
export interface UpdatePositionsAction extends ReduxAction<PositionCreateUpdateDto> {}
export interface DeletePositionsAction extends ReduxAction<number> {}

export type PositionsActionTypes = 
    LoadPositionsAction |
    LoadPositionsSuccessAction |
    LoadPositionsErrorAction |
    CreatePositionsAction |
    UpdatePositionsAction |
    DeletePositionsAction;