import { PositionDto } from '../../api/models/Position';

export default interface PositionsState {
    positions: PositionDto[];

    loading: boolean;
}