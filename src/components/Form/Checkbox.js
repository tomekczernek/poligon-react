import { forwardRef } from "react";
import PropTypes from "prop-types";

const Checkbox = forwardRef(({ elemName, label, className, ...restProps }, ref) => {
  return (
    <label htmlFor={elemName}>
      <input id={elemName} type="checkbox" data-testid={elemName} className={className} {...restProps} ref={ref} />{" "}
      <span>{label}</span>
    </label>
  );
});

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
