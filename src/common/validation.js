const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const nameRegex = /^[a-z ,.'-]+$/i;
const postCodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;

export const required = (value) => (value ? undefined : "Required");

export const numbersOnly = (value) => {
  if (value) {
    return /^\d+$/.test(value) ? undefined : "Invalid";
  }
};

export const numbersAndSpacesOnly = (value) => {
  if (value) {
    return /^[\d\s]+$/.test(value) ? undefined : "Invalid";
  }
};

export const email = (value) => {
  if (value) {
    return emailRegex.test(value) ? undefined : "Invalid";
  }
};

export const name = (value) => {
  if (value) {
    return nameRegex.test(value) ? undefined : "Invalid";
  }
};

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export const validateDate = (day, month, year) => {
  if (numbersOnly(day) || numbersOnly(month) || numbersOnly(year)) {
    return "Invalid";
  }

  const dayInteger = parseInt(day);
  const monthInteger = parseInt(month);
  const yearInteger = parseInt(year);

  if (dayInteger > 31 || dayInteger < 1) {
    return "Invalid";
  }

  if (monthInteger > 12 || monthInteger < 1) {
    return "Invalid";
  }

  if (year.length !== 4 || yearInteger < "1900") {
    return "Invalid";
  }

  const dateToValidate = new Date(year, month - 1, day);

  if (dateToValidate.getDate() !== dayInteger) {
    return "Invalid";
  }

  return undefined;
};

export const validateDateOfBirth = (day, month, year) => {
  const invalidDate = validateDate(day, month, year);

  if (invalidDate) {
    return invalidDate;
  }

  const dateToValidate = new Date(year, month - 1, day);
  const now = new Date();

  const currentDay = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const currentDate = new Date(currentYear, currentMonth, currentDay);

  if (dateToValidate.getTime() > currentDate.getTime()) {
    return "Invalid";
  }
};

export const postCode = (value) => {
  if (value) {
    return postCodeRegex.test(value) ? undefined : "Invalid";
  }
};

export const validateSelectOneOption =
  (fieldName, errorName) =>
  (values = {}) => {
    const errors = {};
    // get values of checkboxes
    const contactPrefValues = Object.values(values?.[fieldName] ?? {});
    // check if theres any true values
    if (!contactPrefValues.some((value) => value === true)) {
      errors[errorName] = "Select at least 1 topic";
    }
    return errors;
  };
