import { Field, useField, useForm } from "react-final-form";
import PropTypes from "prop-types";

import FieldError from "../FieldError";
import { required, postCode, composeValidators } from "../validation";

const validatePostCode = composeValidators(required, postCode);

const PostCodeSearch = ({ prefix, error, btnText, getAddresses, loading }) => {
  const formApi = useForm();
  const fieldName = `${prefix}.searchPostCode`;
  const { input } = useField(fieldName);
  const invalid = validatePostCode(input?.value);

  return (
    <div className={`wmnds-fe-group ${error && "wmnds-fe-group--error"}`}>
      <label className="wmnds-fe-label" htmlFor={fieldName}>
        Postcode *
      </label>
      <FieldError text={error} />
      <Field
        name={fieldName}
        validate={validatePostCode}
        component="input"
        type="text"
        className="wmnds-fe-input"
      />
      <button
        className={`wmnds-m-t-md wmnds-btn wmnds-btn--primary ${
          (invalid || loading) && "wmnds-btn--disabled"
        }`}
        type="button"
         onClick={() => {
            formApi.submit();
            getAddresses(input?.value);
          }}
      >
        {btnText ? btnText : "Find Address"}

        {loading ? (
          <div
            className="wmnds-loader wmnds-loader--btn wmnds-btn__icon wmnds-btn__icon--right"
            role="alert"
            aria-live="assertive"
          >
            <p className="wmnds-loader__content"></p>
          </div>
        ) : null}
      </button>
    </div>
  );
};

PostCodeSearch.propTypes = {
  prefix: PropTypes.string.isRequired,
  error: PropTypes.string,
  errorE: PropTypes.string,
  btnText: PropTypes.string,
  getAddresses: PropTypes.func,
  loading: PropTypes.bool,
};

export default PostCodeSearch;
