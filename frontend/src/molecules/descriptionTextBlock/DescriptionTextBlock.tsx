import React, { FC } from 'react';
import { styled, Typography, TypographyProps } from '@material-ui/core';

const DescriptionTextBlock: FC<Omit<TypographyProps, 'variant'>> = (props) => (
    <Typography { ...props } variant='caption' />
);

export default styled(DescriptionTextBlock)({
    display: 'block'
});