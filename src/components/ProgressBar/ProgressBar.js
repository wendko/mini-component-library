/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHT = {
    large: 24,
    medium: 12,
    small: 8
}
const PADDING = {
    large: 4,
    medium: 0,
    small: 0
}

const ProgressBarElement = styled.div`
    background: ${props => `linear-gradient(to right, ${COLORS.primary} 0 ${props['aria-valuenow']}%, transparent 0%)`};
    border-radius: inherit;
    height: 100%;
`

const Wrapper = styled.div`
    height: ${props => `${HEIGHT[props.size]}px`};
    border-radius: 8px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: ${props => `${PADDING[props.size]}px`};
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper size={size}>
    <ProgressBarElement role="progressbar" size={size} aria-valuenow={value} aria-valuemin="0" aria-valuetext="Step 2: Copying files... " aria-valuemax="100"></ProgressBarElement>
    <VisuallyHidden>Step 2: Copying files...</VisuallyHidden>
</Wrapper>
};

export default ProgressBar;
