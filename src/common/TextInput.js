import { Field } from "react-final-form";
import PropTypes from "prop-types";

import FieldError from "./FieldError";

const TextInput = ({
  fieldName,
  label,
  validation,
  error,
  containerClass,
  defaultValue,
  isRequired,
  disab
}) => (
  <div
    className={`wmnds-fe-group ${error && "wmnds-fe-group--error"} ${
      containerClass && containerClass
    }`}
  >
    <label className="wmnds-fe-label" htmlFor={fieldName}>
      {label} {isRequired && <>*</>}
    </label>
    <FieldError text={error} />
    <Field
      name={fieldName}
      id={fieldName}
      validate={validation}
      component="input"
      type="text"
      className="wmnds-fe-input"
      defaultValue={defaultValue}
      disabled={disab}
    />
  </div>
);

TextInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  validation: PropTypes.func,
  error: PropTypes.string,
  containerClass: PropTypes.string,
  defaultValue: PropTypes.string,
  isRequired: PropTypes.string,
  disab: PropTypes.bool,
};

TextInput.defaultProps = {
  isRequired: false,
  disab: false,
};

export default TextInput;
