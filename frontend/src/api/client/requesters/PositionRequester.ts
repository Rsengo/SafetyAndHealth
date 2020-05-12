import BaseRequester from './BaseRequester';
import ApiConstants from '../../../constants/ApiConstants.json';
import { PositionDto, PositionCreateUpdateDto } from '../../models/Position';

class PositionRequester extends BaseRequester {

    getAll(): Promise<PositionDto[]> {
        return this._get<PositionDto[]>(ApiConstants.routes.position.getAll);
    }

    create(position: PositionCreateUpdateDto): Promise<PositionDto> {
        return this._post(ApiConstants.routes.position.create, position);
    }

    update(position: PositionCreateUpdateDto): Promise<PositionDto> {
        return this._put(ApiConstants.routes.position.create, position);
    }

    delete(positionId: number): Promise<void> {
        return this._delete(`${ApiConstants.routes.position.delete}/${positionId}`);
    }
}

export default PositionRequester;