import { forwardRef } from "react";
import styled from "styled-components";
import colors from "./colors";
import './styles.css';

const TextBox = forwardRef(({ name, label, errors, className, ...restProp }, ref) => {

  const hasError = Reflect.has(errors, name);
  const classes = `${className} ${hasError ? `error` : ''}`;

  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
        {" "}
      <div>
        <input type="text" data-testid={name} className={classes} name={name} {...restProp} ref={ref} />
        {errors[name] && <span style={{color: colors.errorColor}}>{errors[name].message}</span>}
      </div>
    </div>
  );
});

const TextBoxStyled = styled(TextBox)`
  border: 2px dashed ${colors.borderColor};
  padding: 8px;
  margin: 5px 0;
  color: ${colors.color};
`;

export { TextBox };
export default TextBoxStyled;
