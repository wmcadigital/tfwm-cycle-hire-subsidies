import { useState, useEffect } from "react";
import { useFormState, useForm } from "react-final-form";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import PostCodeSearch from "./PostCodeSearch";
import fetchEligibility from "./api/fetchEligibility";
import TextInput from "../../common/TextInput";
import Question from "../../common/Question";
import { required } from "../../common/validation";

const Address = ({ prefix, btnText, isRequired }) => {
  const [loading, setLoading] = useState(false);
  const formState = useFormState();
  const formApi = useForm();

  const errorSearchPostcode = formState.submitFailed
    ? formState.errors[prefix]?.searchPostCode
    : null;
  const [errorPostCode, setErrorPostCode] = useState(errorSearchPostcode);

  useEffect(() => setErrorPostCode(errorSearchPostcode), [errorSearchPostcode]);

  const errorSearchEligibility = formState.submitFailed
    ? formState.errors?.eligibility
    : null;
  const [errorEligibility, setErrorEligibility] = useState(
    errorSearchEligibility
  );

  useEffect(
    () => setErrorEligibility(errorSearchEligibility),
    [errorSearchEligibility]
  );

  const navigate = useNavigate();

  const getAddresses = async (postCode) => {
    setLoading(true);
    const eligibility = await fetchEligibility(postCode);

    // if not eligible send to error page
    if (eligibility.ResponseCode !== "200") {
      navigate("/outsideWmca", {
        state: { formValues: formState.values },
        replace: true,
      });
      return;
    } else {
      formApi.mutators.setFormAttribute("eligible", "yes");
      setLoading(false);
    }
  };

  return (
    <>
      <PostCodeSearch
        error={errorPostCode}
        btnText={btnText}
        getAddresses={getAddresses}
        loading={loading}
        prefix={prefix}
      />
      <TextInput
        fieldName="eligibility"
        label="Eligibility"
        validation={required}
        error={errorEligibility}
        defaultValue={formState.values.eligible}
        containerClass="hide"
        isRequired={isRequired}
      />
      {formState.values.eligibility == "yes" && (
        <Question text="Congratulations. Click continue to apply." isRequired={false} />
      )}
    </>
  );
};

Address.propTypes = {
  prefix: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  checkInside: PropTypes.bool,
  orderNo: PropTypes.number,
  addresses: PropTypes.arrayOf(PropTypes.object),
  setAddresses: PropTypes.func,
  isRequired: PropTypes.bool,
};

Address.defaultProps = {
  checkInside: false,
  addresses: [],
  isRequired: false,
};

export default Address;
