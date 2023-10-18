import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import RadioGroup from "../../common/RadioGroup";
import RadioButton from "../../common/RadioButton";
import Dropdown from "../../common/Dropdown";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const Q3Q4Survey = () => {
  const stateApi = useFormState();

  const dropdownOptions = [
    { value: "5 or more days a week", label: "5 or more days a week" },
    { value: "3 or 4 days a week", label: "3 or 4 days a week" },
    { value: "1 or 2 days a week", label: "1 or 2 days a week" },
    { value: "Once or twice a month", label: "Once or twice a month" },
    { value: "Less than once a month", label: "Less than once a month" },
    { value: "Never", label: "Never" },
  ];

  const q3error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3
      : null;

  const q4error =
      stateApi.submitFailed && stateApi.hasValidationErrors
        ? stateApi.errors?.formData.SurveyData.q4
        : null;

  const q5error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q5.PlaceOfWork
      : null;

  const q5error1 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q5.PlaceOfEducation
      : null;

  const q5error2 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q5.ExerciseOrRecreation
      : null;

  const q5error3 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q5.OtherReasons
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
      <Question text="Your current travel" isRequired={true} />
      <p>
        Q3 - On average, how much time do you spend cycling per week? Please
        include any casual cycling in your local area, any cycling in the
        countryside or on cycling routes, cycling to or from work or any
        competitive cycling. Please do not include any time spent cycling on a
        static or exercise bike. *
      </p>
      <RadioGroup error={q3error}>
        <FieldError text={q3error} />
        <RadioButton
          key={1}
          label="Two or more hours per week"
          validation={required}
          value="Two or more hours per week"
          fieldName="formData.SurveyData.q3"
        />
        <RadioButton
          key={2}
          label="Between one and two hours per week"
          validation={required}
          value="Between one and two hours per week"
          fieldName="formData.SurveyData.q3"
        />
        <RadioButton
          key={3}
          label="Between 30 minutes and one hour per week"
          validation={required}
          value="Between 30 minutes and one hour per week"
          fieldName="formData.SurveyData.q3"
        />
        <RadioButton
          key={4}
          label="Less than 30 minutes per week"
          validation={required}
          value="Less than 30 minutes per week"
          fieldName="formData.SurveyData.q3"
        />
        <RadioButton
          key={5}
          label="Don't know/unsure"
          validation={required}
          value="Don't know/unsure"
          fieldName="formData.SurveyData.q3"
        />
      </RadioGroup>

      <p>
        Q4 - On average, how much time do you spend e-scooter per week? *
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
        Q5 - On average, how often would you say you e-scooter for at least 10
        minutes as part of your journey, for each of the following reasons:
      </p>

      <Dropdown
        fieldName="formData.SurveyData.q5.PlaceOfWork"
        error={q5error}
        label="To go to/from your place of work"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q5.PlaceOfEducation"
        error={q5error1}
        label="To go to/from your place of education (e.g. school, college, or university)"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q5.ExerciseOrRecreation"
        error={q5error2}
        label="To do exercise or for recreation"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q5.OtherReasons"
        error={q5error3}
        label="For other reasons"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
    </FormSection>
  );
};

export default Q3Q4Survey;
