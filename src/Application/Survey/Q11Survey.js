import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import RadioGroup from "../../common/RadioGroup";
import RadioButton from "../../common/RadioButton";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const Q10Survey = () => {
  const stateApi = useFormState();

  const q23error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.Gender
      : null;

  const q24error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q24
      : null;

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
      <p>Q23 - Are you: *</p>
      <RadioGroup error={q23error}>
        <FieldError text={q23error} />
        <RadioButton
          key={1}
          label="Male"
          validation={required}
          value="Male"
          fieldName="formData.Gender"
        />
        <RadioButton
          key={2}
          label="Female"
          validation={required}
          value="Female"
          fieldName="formData.Gender"
        />
        <RadioButton
          key={3}
          label="Prefer to self-describe"
          validation={required}
          value="Prefer to self-describe"
          fieldName="formData.Gender"
        />
        <RadioButton
          key={4}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="formData.Gender"
        />
      </RadioGroup>

      <p>Q24 - Which of these age groups do you belong to? *</p>
      <RadioGroup error={q24error}>
        <FieldError text={q24error} />
        <RadioButton
          key={1}
          label="14 – 15"
          validation={required}
          value="14 – 15"
          fieldName="formData.SurveyData.q24"
        />
        <RadioButton
          key={2}
          label="16 – 17"
          validation={required}
          value="16 – 17"
          fieldName="formData.SurveyData.q24"
        />
        <RadioButton
          key={3}
          label="18 – 24"
          validation={required}
          value="18 – 24"
          fieldName="formData.SurveyData.q24"
        />
        <RadioButton
          key={4}
          label="25 – 34"
          validation={required}
          value="25 – 34"
          fieldName="formData.SurveyData.q24"
        />
        <RadioButton
          key={5}
          label="35 – 44"
          validation={required}
          value="35 – 44"
          fieldName="formData.SurveyData.q24"
        />
        <RadioButton
          key={6}
          label="45 – 54"
          validation={required}
          value="45 – 54"
          fieldName="formData.SurveyData.q24"
        />
        <RadioButton
          key={7}
          label="55 – 64"
          validation={required}
          value="55 – 64"
          fieldName="formData.SurveyData.q24"
        />
        <RadioButton
          key={8}
          label="65+"
          validation={required}
          value="65+"
          fieldName="formData.SurveyData.q24"
        />{" "}
        <RadioButton
          key={9}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="formData.SurveyData.q24"
        />
      </RadioGroup>
    </FormSection>
  );
};

export default Q10Survey;
