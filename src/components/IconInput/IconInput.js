import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

// not sure about:
// click icon to focus on input
// visually hidden label

const ICON_SIZE = {
    small: 10.67,
    large: 16,
};

const INPUT_FONT_SIZE = {
    small: 14,
    large: 18,
}


const InputElement = styled.input`
    width: ${props => props.width + 'px'};
    border: none;
    font-size: ${props => INPUT_FONT_SIZE[props.size] + 'px'};
    font-weight: bold;
    margin-left: 1rem;
    color: ${COLORS.gray700};

    &:focus {
        outline: none;
    }

    &:hover {
        color: ${COLORS.black};
    }

    &::placeholder {
        font-weight: normal;
        color: ${COLORS.gray300};
    }
`;

const Wrapper = styled.div`
    width: min-content;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${COLORS.black};
    padding: 7px;

    
    &:focus-within {
        outline: 1px solid;
        outline-offset: 2px;
    }
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
    return <>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Wrapper>
            <Icon id={icon} size={ICON_SIZE[size]}></Icon>
            <InputElement id={label} type='text' placeholder={placeholder} width={width} size={size}>
            </InputElement>
        </Wrapper>
    </>
};

export default IconInput;
