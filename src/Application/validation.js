import { validateDateOfBirth as validateDateOfBirthCommons } from "../common/validation";

export const validateDateOfBirth = (values = {}) => {
  const errors = {};
  const { bdayDay, bdayMonth, bdayYear } = values;

  if (!bdayDay && !bdayMonth && !bdayYear) {
    errors.dateOfBirth = "Required";
    return errors;
  }

  if (!bdayDay || !bdayMonth || !bdayYear) {
    errors.dateOfBirth = "Invalid";
    return errors;
  }

  const invalid = validateDateOfBirthCommons(bdayDay, bdayMonth, bdayYear);

  if (invalid) {
    errors.dateOfBirth = invalid;
  }

  return errors;
};

export const addressIdPresent =
  (prefix) =>
  (values = {}) => {
    const errors = { [prefix]: {} };
    if (!values[prefix]?.addressId) {
      errors[prefix].addressId = "Required";
    }
    return errors;
  };

export const validateContactPreference = (values = {}) => {
  const errors = {};
  const contactPrefValues = Object.values(values?.contactPreference ?? {});
  if (!contactPrefValues.some((value) => value === true)) {
    errors.selectContactPref = "Select at least 1 topic";
  }
  return errors;
};

export const validateCheckAnswers = (values) => {
  const errors = {};
  if (
    !values.agreeTermsAndConditions ||
    !values.agreePrivacyPolicy ||
    !values.formData.SelfCertifiedEligibility
  ) {
    errors.legal = "Required";
  }
  return errors;
};

export const validateQ7 = (values) => {
  const errors = {};
  if (!values.q7) {
    errors.formData.SurveyData.q7 = "Required";
  }
  return errors;
};

// export const validateSelectOneOption =
//   (fieldName, errorName) =>
//   (values = {}) => {
//     const errors = {};
//     const name = "formData";
//     const contactPrefValues = Object.values(values?.[name] ?? {});
//     console.log(contactPrefValues.length);
//     if (contactPrefValues.length === 0) {
//       errors[errorName] = "Select at least 1 topic";
//     }
//     return errors;
//   };
