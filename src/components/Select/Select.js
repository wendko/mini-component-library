import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';


const getWidth = (value) => {
    const width = value.length + 'rem';
    return width;
}

const SelectElement = styled.select`
    background: ${COLORS.gray50};
    border-radius: 8px;
    width: min-content;
    max-width: ${props => getWidth(props.displayedValue)};

    border: 12px solid ${COLORS.gray50};
    color: ${COLORS.gray700};
    
    &:hover {
        color: ${COLORS.black};
    }

    &:after {
        content: ${props => props.value};
        position: absolute;
    }
`;


const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectElement value={value} displayedValue={displayedValue} onChange={onChange}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children.map(child => {
            if (child.props.value === value) {
                return <option selected value={child.props.value}>{child.props.children}</option>;
            }
            return <option value={child.props.value}>{child.props.children}</option>;
        })}
    </SelectElement>
  );
};

export default Select;
 