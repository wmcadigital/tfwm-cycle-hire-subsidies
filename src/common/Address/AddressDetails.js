import PropTypes from "prop-types";
import { useFormState } from "react-final-form";

import TextInput from "../TextInput";
import { required, postCode, composeValidators } from "../validation";

const validatePostCode = composeValidators(required, postCode);

const AddressDetails = ({ prefix, addresses }) => {
  const formState = useFormState();
  const addressId = formState.values[prefix]?.addressId;

  let initialPostCode = "";
  let matchingAddress = {};

  if (addressId === "manual") {
    initialPostCode = formState.values[prefix]?.searchPostCode;
  } else {
    matchingAddress =
      addresses.find((address) => address.guid === addressId) ?? {};
    initialPostCode = matchingAddress.postcode;
  }

  const addressLine1Error = formState.submitFailed
    ? formState.errors[prefix]?.AddressLine1
    : null;
  const townOrCityError = formState.submitFailed
    ? formState.errors[prefix]?.District
    : null;
  const countyError = formState.submitFailed
    ? formState.errors[prefix]?.County
    : null;
  const postCodeError = formState.submitFailed
    ? formState.errors[prefix]?.PostCode
    : null;

  return (
    <>
      <TextInput
        fieldName={`${prefix}.AddressLine1`}
        label="Building and street"
        containerClass="wmrards-m-b-md"
        defaultValue={matchingAddress["line_1"]}
        validation={required}
        error={addressLine1Error}
        isRequired={true}
      />
      <TextInput
        fieldName={`${prefix}.AddressLine2`}
        label="Address line 2"
        defaultValue={matchingAddress["line_2"]}
        isRequired={false}
      />
      <TextInput
        fieldName={`${prefix}.AddressLine3`}
        defaultValue={matchingAddress["line_3"]}
        containerClass="hide"
      />
      <TextInput
        fieldName={`${prefix}.District`}
        label="Town or city"
        defaultValue={matchingAddress["post_town"]}
        validation={required}
        error={townOrCityError}
        isRequired={true}
      />
      <TextInput
        fieldName={`${prefix}.County`}
        label="County"
        defaultValue={matchingAddress["county"]}
        validation={required}
        error={countyError}
        isRequired={true}
      />
      <TextInput
        fieldName={`${prefix}.PostCode`}
        label="Postcode"
        defaultValue={initialPostCode}
        validation={validatePostCode}
        error={postCodeError}
        isRequired={true}
      />
      <TextInput
        fieldName={`${prefix}.SummaryLine`}
        defaultValue={matchingAddress["summary_line"]}
        containerClass="hide"
      />
      <TextInput
        fieldName={`${prefix}.Ward`}
        defaultValue={matchingAddress["ward"]}
        containerClass="hide"
      />
      <TextInput
        fieldName={"udprn"}
        defaultValue={matchingAddress["udprn"]}
        containerClass="hide"
      />
      <TextInput
        fieldName={"umprn"}
        defaultValue={matchingAddress["umprn"]}
        containerClass="hide"
      />
    </>
  );
};

AddressDetails.propTypes = {
  prefix: PropTypes.string.isRequired,
  addresses: PropTypes.arrayOf(PropTypes.object),
};

AddressDetails.defaultProps = {
  addresses: [],
};

export default AddressDetails;
