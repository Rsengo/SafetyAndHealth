import React, { FC } from 'react';
import BriefingsList from '../../organisms/admin/briefingsList/BriefingsList';
import { briefings } from './mockData';

const BriefingsLibrary: FC = () => (
    <BriefingsList
        briefings={briefings}
        onEditClick={() => {}}
    />
);

export default BriefingsLibrary;