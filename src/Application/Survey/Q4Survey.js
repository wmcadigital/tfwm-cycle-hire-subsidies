import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import RadioGroup from "../../common/RadioGroup";
import RadioButton from "../../common/RadioButton";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const Q4Survey = () => {
  const stateApi = useFormState();

  const q4error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q4
      : null;

  const q5error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q4
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <Question text="Your current travel" />
      <p>
        Q4 - On average, how much time do you spend cycling per week? Please
        include any casual cycling in your local area, any cycling in the
        countryside or on cycling routes, cycling to or from work or any
        competitive cycling. Please do not include any time spent cycling on a
        static or exercise bike.
      </p>
      <RadioGroup error={q4error}>
        <FieldError text={q4error} />
        <RadioButton
          key={1}
          label="Two or more hours per week"
          validation={required}
          value="Two or more hours per week"
          fieldName="formData.SurveyData.q4"
        />
        <RadioButton
          key={2}
          label="Between one and two hours per week"
          validation={required}
          value="Between one and two hours per week"
          fieldName="formData.SurveyData.q4"
        />
        <RadioButton
          key={3}
          label="Between 30 minutes and one hour per week"
          validation={required}
          value="Between 30 minutes and one hour per week"
          fieldName="formData.SurveyData.q4"
        />
        <RadioButton
          key={4}
          label="Less than 30 minutes per week"
          validation={required}
          value="Less than 30 minutes per week"
          fieldName="formData.SurveyData.q4"
        />
        <RadioButton
          key={5}
          label="Don't know/unsure"
          validation={required}
          value="Don't know/unsure"
          fieldName="formData.SurveyData.q4"
        />
      </RadioGroup>

      <p>
        Q5 - On average, how much time do you spend walking per week? Please
        include any country walks, walking to and from work or the shops and any
        other walks you may have done. Please do not include time spent walking
        around shops.
      </p>
      <RadioGroup error={q5error}>
        <FieldError text={q5error} />
        <RadioButton
          key={1}
          label="Two or more hours per week"
          validation={required}
          value="Two or more hours per week"
          fieldName="formData.SurveyData.q5"
        />
        <RadioButton
          key={2}
          label="Between one and two hours per week"
          validation={required}
          value="Between one and two hours per week"
          fieldName="formData.SurveyData.q5"
        />
        <RadioButton
          key={3}
          label="Between 30 minutes and one hour per week"
          validation={required}
          value="Between 30 minutes and one hour per week"
          fieldName="formData.SurveyData.q5"
        />
        <RadioButton
          key={4}
          label="Less than 30 minutes per week"
          validation={required}
          value="Less than 30 minutes per week"
          fieldName="formData.SurveyData.q5"
        />
        <RadioButton
          key={5}
          label="Don't know/unsure"
          validation={required}
          value="Don't know/unsure"
          fieldName="formData.SurveyData.q5"
        />
      </RadioGroup>
    </FormSection>
  );
};

export default Q4Survey;
