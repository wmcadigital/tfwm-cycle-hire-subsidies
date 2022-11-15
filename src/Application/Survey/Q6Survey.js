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

const Q6Survey = () => {
  const stateApi = useFormState();
  const formApi = useForm();

  const q8error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q8
      : null;

  const q9error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q9
      : null;

  const q11error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q11
      : null;

  // copy q7 value to survey data
  useEffect(() => {
    formApi.mutators.setFormAttribute(
      "formData.SurveyData.q7",
      stateApi.values.q7
    );
  }, [formApi.mutators]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />

      <Question text="Safety and Confidence" isRequired={true} />
      <p>
        Q8 - Currently, how safe do you feel cycling on roads in your local
        area? *
      </p>
      <RadioGroup error={q8error}>
        <FieldError text={q8error} />
        <RadioButton
          key={1}
          label="Very safe"
          validation={required}
          value="Very safe"
          fieldName="formData.SurveyData.q8"
        />
        <RadioButton
          key={2}
          label="Safe"
          validation={required}
          value="Safe"
          fieldName="formData.SurveyData.q8"
        />
        <RadioButton
          key={3}
          label="Not very safe"
          validation={required}
          value="Not very safe"
          fieldName="formData.SurveyData.q8"
        />
        <RadioButton
          key={4}
          label="Not at all safe"
          validation={required}
          value="Not at all safe"
          fieldName="formData.SurveyData.q8"
        />
        <RadioButton
          key={5}
          label="Don't know/unsure"
          validation={required}
          value="Don't know/unsure"
          fieldName="formData.SurveyData.q8"
        />
      </RadioGroup>

      <TextInput
        fieldName="formData.SurveyData.q9"
        label="Q9 - What are the main reasons that you feel the way you said in Q8 about cycling on roads in your local area?"
        validation={required}
        error={q9error}
        isRequired={true}
      />

      <TextInput
        fieldName="formData.SurveyData.q10"
        label="Q10 - If you have any comments or suggestions on how your feeling of safety could be improved
        when cycling on roads in your local area please provide more detail below:"
      />

      <p>
        Q11 - And how confident do you feel about cycling on roads in your local
        area? *
      </p>
      <RadioGroup error={q11error}>
        <FieldError text={q11error} />
        <RadioButton
          key={1}
          label="Very confident"
          validation={required}
          value="Very confident"
          fieldName="formData.SurveyData.q11"
        />
        <RadioButton
          key={2}
          label="Fairly confident"
          validation={required}
          value="Fairly confident"
          fieldName="formData.SurveyData.q11"
        />
        <RadioButton
          key={3}
          label="Not very confident"
          validation={required}
          value="Not very confident"
          fieldName="formData.SurveyData.q11"
        />
        <RadioButton
          key={4}
          label="Not at all confident"
          validation={required}
          value="Not at all confident"
          fieldName="formData.SurveyData.q11"
        />
        <RadioButton
          key={5}
          label="Don't know/unsure"
          validation={required}
          value="Don't know/unsure"
          fieldName="formData.SurveyData.q11"
        />
      </RadioGroup>
    </FormSection>
  );
};

export default Q6Survey;
