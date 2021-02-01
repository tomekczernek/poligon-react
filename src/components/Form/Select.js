import { forwardRef } from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';
import colors from './colors';

const Select = forwardRef(({ name, items, className, ...restProp}, ref) => {
return(
    <select name={name} data-testid={name} className={className} {...restProp} ref={ref}>
        {items.map(item => (
            <option key={item.value} value={item.value} >
                {item.label}
            </option>
        ))}
    </select>
    );
});

Select.propTypes = {
    items   : propTypes.array.isRequired
};

const SelectStyled = styled(Select)`
border: 2px dashed ${colors.borderColor};
padding: 4px;
margin: 5px 10px;
color: ${colors.color};
`;

export {Select};
export default SelectStyled;