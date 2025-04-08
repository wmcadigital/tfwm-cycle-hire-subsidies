import { useEffect } from "react";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import TextInput from "../../common/TextInput";
import { required } from "../../common/validation";

const Q13Survey = () => {
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
