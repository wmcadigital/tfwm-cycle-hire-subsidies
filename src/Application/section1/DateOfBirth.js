import { useEffect } from "react";
import { useFormState, useForm } from "react-final-form";

import FormSection from "../../common/FormSection";
import Question from "../../common/Question";
import ProgressIndicator from "../../common/ProgressIndicator";
import DateInput from "../../common/DateInput";

const DateOfBirth = () => {
  const stateApi = useFormState();
  const formValues = stateApi.values;
  const formApi = useForm();

  const error = stateApi.submitFailed ? stateApi.errors?.dateOfBirth : null;

  useEffect(() => {
    if (formValues.bdayDay) {
      if (
        formValues.bdayDay !== null &&
        formValues.bdayMonth !== null &&
        formValues.bdayYear !== null
      ) {
        formApi.mutators.setFormAttribute(
          "formData.DateOfBirth",
          formValues.bdayDay +
            "/" +
            formValues.bdayMonth +
            "/" +
            formValues.bdayYear
        );
      } else {
        formApi.mutators.setFormAttribute("formData.DateOfBirth", "N/A");
      }
    }
  }, [
    formApi.mutators,
    formValues.bdayDay,
    formValues.bdayMonth,
    formValues.bdayYear,
  ]);

  const question = "What is your date of birth?";

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text={question} />
      <DateInput
        dayFieldName="bdayDay"
        monthFieldName="bdayMonth"
        yearFieldName="bdayYear"
        label="For example, 3 7 1985"
        error={error}
      />
    </FormSection>
  );
};

export default DateOfBirth;
