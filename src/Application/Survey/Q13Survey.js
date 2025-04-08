import { useEffect } from "react";
// import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import TextInput from "../../common/TextInput";
import { required } from "../../common/validation";

// const dropdownOptions = [
//   { value: "5 or more days a week", label: "5 or more days a week" },
//   { value: "3 or 4 days a week", label: "3 or 4 days a week" },
//   { value: "1 or 2 days a week", label: "1 or 2 days a week" },
//   { value: "Once or twice a month", label: "Once or twice a month" },
//   { value: "Less than once a month", label: "Less than once a month" },
//   { value: "Never", label: "Never" },
// ];

const Q13Survey = () => {
  // const stateApi = useFormState();

  // const error =
  //   stateApi.submitFailed && stateApi.hasValidationErrors
  //     ? stateApi.errors?.formData.SurveyData.q3.PlaceOfWork
  //     : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="Survey"
      />
      <Question text="About You" isRequired={true} />
      <TextInput
        fieldName="formData.PostCode"
        label="Q14 - What is your home postcode?"
        validation={required}
        disab="true"
      />
    </FormSection>
  );
};

export default Q13Survey;
