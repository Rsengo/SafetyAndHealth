import { FieldData, FieldValidator, FieldComparatorValidator } from '../../../types/form';
import { PositionDto } from '../../../api/models/Position';

export interface UserRegistrationInfo {
    [index: string]: FieldData<string | null> | FieldData<number | null>;

    email: FieldData<string | null>;

    userName: FieldData<string | null>;

    password: FieldData<string | null>;

    confirmPassword: FieldData<string | null>;

    positionId: FieldData<number | null>;

    firstName: FieldData<string | null>;

    middleName: FieldData<string | null>;

    lastName: FieldData<string | null>;

    contactPhoneNumber: FieldData<string | null>;
}

export interface UserRegistrationFormProps {
    userInfo: UserRegistrationInfo;

    positions: PositionDto[]; // TODO other type

    onFieldChanged: (field: string, data: FieldData) => void;
}