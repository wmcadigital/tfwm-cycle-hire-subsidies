import { useEffect } from "react";
import { useFormState, useForm } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import RadioGroup from "../../common/RadioGroup";
import RadioButton from "../../common/RadioButton";
import TextInput from "../../common/TextInput";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const Q11Q12Survey = () => {
  const stateApi = useFormState();
  const formValues = stateApi.values;
  const formApi = useForm();

  const q13error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.q13
      : null;

  const q13berror =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q13b
      : null;

  const q14error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q14
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // copy q11 value to survey data
  useEffect(() => {
    formApi.mutators.setFormAttribute(
      "formData.SurveyData.q13",
      stateApi.values.q13
    );
  }, [formApi.mutators, stateApi.values.q13]);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <Question text="About You" isRequired={true} />
      <p>Q13 - Are you: *</p>
      <RadioGroup error={q13error}>
        <FieldError text={q13error} />
        <RadioButton
          key={1}
          label="Male"
          validation={required}
          value="Male"
          fieldName="q13"
        />
        <RadioButton
          key={2}
          label="Female"
          validation={required}
          value="Female"
          fieldName="q13"
        />
        <RadioButton
          key={3}
          label="Prefer to self-describe"
          validation={required}
          value="Prefer to self-describe"
          fieldName="q13"
        />
        <RadioButton
          key={4}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="q13"
        />
      </RadioGroup>
      {formValues.q13 === "Prefer to self-describe" ? (
        <TextInput
          fieldName="formData.SurveyData.q13b"
          label="Q13b - Please self-describe:"
          validation={required}
          error={q13berror}
          isRequired={true}
        />
      ) : null}
      <p>Q14 - Which of these age groups do you belong to? *</p>
      <RadioGroup error={q14error}>
        <FieldError text={q14error} />
        {/* <RadioButton
          key={1}
          label="14 – 15"
          validation={required}
          value="14 – 15"
          fieldName="formData.SurveyData.q12"
        /> */}
        <RadioButton
          key={2}
          label="16 – 17"
          validation={required}
          value="16 – 17"
          fieldName="formData.SurveyData.q14"
        />
        <RadioButton
          key={3}
          label="18 – 24"
          validation={required}
          value="18 – 24"
          fieldName="formData.SurveyData.q14"
        />
        <RadioButton
          key={4}
          label="25 – 34"
          validation={required}
          value="25 – 34"
          fieldName="formData.SurveyData.q14"
        />
        <RadioButton
          key={5}
          label="35 – 44"
          validation={required}
          value="35 – 44"
          fieldName="formData.SurveyData.q14"
        />
        <RadioButton
          key={6}
          label="45 – 54"
          validation={required}
          value="45 – 54"
          fieldName="formData.SurveyData.q14"
        />
        <RadioButton
          key={7}
          label="55 – 64"
          validation={required}
          value="55 – 64"
          fieldName="formData.SurveyData.q14"
        />
        <RadioButton
          key={8}
          label="65+"
          validation={required}
          value="65+"
          fieldName="formData.SurveyData.q14"
        />{" "}
        <RadioButton
          key={9}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="formData.SurveyData.q14"
        />
      </RadioGroup>
    </FormSection>
  );
};

export default Q11Q12Survey;
