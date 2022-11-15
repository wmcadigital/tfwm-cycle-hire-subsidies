import PropTypes from "prop-types";
import { Field } from "react-final-form";

import FieldError from "./FieldError";

const Dropdown = ({ fieldName, label, prompt, options, validation, error, isRequired }) => {
  return (
    <div className={`wmnds-fe-group ${error ? "wmnds-fe-group--error" : null}`}>
      <div className="wmnds-fe-dropdown">
        <FieldError text={error} />
        {label ? (
          <label className="wmnds-fe-label" htmlFor={fieldName}>
            {label} {isRequired && <span>*</span>}
          </label>
        ) : null}
        <Field name={fieldName} validate={validation}>
          {({ input }) => (
            <select
              {...input}
              className="wmnds-fe-dropdown__select "
              id={fieldName}
            >
              <option value="">{prompt}</option>
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          )}
        </Field>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string,
  prompt: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  validation: PropTypes.func,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
};

Dropdown.defaultProps = {
  prompt: "Choose from list",
  options: [],
  isRequired: false,
};

export default Dropdown;
