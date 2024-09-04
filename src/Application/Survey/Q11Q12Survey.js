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

  const q12error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.q12
      : null;

  const q12berror =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q12b
      : null;

  const q13error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q13
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // copy q11 value to survey data
  useEffect(() => {
    formApi.mutators.setFormAttribute(
      "formData.SurveyData.q12",
      stateApi.values.q12
    );
  }, [formApi.mutators, stateApi.values.q12]);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="Survey"
      />
      <Question text="About You" isRequired={true} />
      <p>Q12 - Are you: *</p>
      <RadioGroup error={q12error}>
        <FieldError text={q12error} />
        <RadioButton
          key={1}
          label="Male"
          validation={required}
          value="Male"
          fieldName="q12"
        />
        <RadioButton
          key={2}
          label="Female"
          validation={required}
          value="Female"
          fieldName="q12"
        />
        <RadioButton
          key={3}
          label="Prefer to self-describe"
          validation={required}
          value="Prefer to self-describe"
          fieldName="q12"
        />
        <RadioButton
          key={4}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="q12"
        />
      </RadioGroup>
      {formValues.q12 === "Prefer to self-describe" ? (
        <TextInput
          fieldName="formData.SurveyData.q12b"
          label="Q12b - Please self-describe:"
          validation={required}
          error={q12berror}
          isRequired={true}
        />
      ) : null}
      <p>Q13 - Which of these age groups do you belong to? *</p>
      <RadioGroup error={q13error}>
        <FieldError text={q13error} />
        <RadioButton
          key={1}
          label="16"
          validation={required}
          value="16"
          fieldName="formData.SurveyData.q13"
        />
        <RadioButton
          key={2}
          label="17 - 24"
          validation={required}
          value="17 - 24"
          fieldName="formData.SurveyData.q13"
        />
        <RadioButton
          key={3}
          label="25 - 34"
          validation={required}
          value="25 - 34"
          fieldName="formData.SurveyData.q13"
        />
        <RadioButton
          key={4}
          label="35 - 44"
          validation={required}
          value="35 - 44"
          fieldName="formData.SurveyData.q13"
        />
        <RadioButton
          key={5}
          label="45 - 54"
          validation={required}
          value="45 - 54"
          fieldName="formData.SurveyData.q13"
        />
        <RadioButton
          key={6}
          label="55 - 60"
          validation={required}
          value="55 - 60"
          fieldName="formData.SurveyData.q13"
        />
        <RadioButton
          key={7}
          label="60+"
          validation={required}
          value="60+"
          fieldName="formData.SurveyData.q13"
        />{" "}
        <RadioButton
          key={8}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="formData.SurveyData.q13"
        />
      </RadioGroup>
    </FormSection>
  );
};

export default Q11Q12Survey;
