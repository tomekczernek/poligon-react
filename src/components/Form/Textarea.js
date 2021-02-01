import { forwardRef } from "react";
import styled from 'styled-components';
import colors from './colors';

const Textarea = forwardRef(({ name, label, errors, className, ...restProp}, ref) => {
return(

    <div>
      <div>
        <label>{label}</label>
      </div>
        {" "}
      <div>
        <textarea data-testid={name} className={className} name={name} {...restProp} ref={ref}/>
        {errors[name] && <span style={{color: colors.errorColor}}>{errors[name].message}</span>}
      </div>
    </div>
    );
});

const TextareaStyled = styled(Textarea)`
border: 2px dashed ${colors.borderColor};
padding: 8px;
margin: 5px 10px;
color: ${colors.color};
`;

export {Textarea};
export default TextareaStyled;