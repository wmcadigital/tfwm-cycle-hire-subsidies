import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import Dropdown from "../../common/Dropdown";
import Checkbox from "../../common/Checkbox";
import CheckboxContainer from "../../common/CheckboxContainer";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

import options from "./Q5dropdownOptions";

const dropdownOptions = [
  { value: "None", label: "None" },
  { value: "One", label: "One" },
  { value: "Two", label: "Two" },
  { value: "Three or more", label: "Three or more" },
];

const Q5Survey = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q6.CarOrVan
      : null;

  const error1 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q6.MotorcycleOrMoped
      : null;

  const q7Error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.selectQ7
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
        Q6 - How many vehicles does your household own or have continuous use of
        at present? *
      </p>

      <Dropdown
        fieldName="formData.SurveyData.q6.CarOrVan"
        error={error}
        label="Car or van"
        options={dropdownOptions}
        validation={required}
      />
      <Dropdown
        fieldName="formData.SurveyData.q6.MotorcycleOrMoped"
        error={error1}
        label="Motorcycle or moped"
        options={dropdownOptions}
        validation={required}
      />
      <p>
        Q7 - Do you own or have use of any of the following? (this could include
        vehicles that you own, hire or use that belong to someone else [e.g. a
        family member or friend). *
      </p>
      <CheckboxContainer error={q7Error}>
        <FieldError text={q7Error} />
        {Object.keys(options).map((option) => (
          <Checkbox
            key={options[option]}
            label={options[option]}
            fieldName={`q7.${option}`}
          />
        ))}
      </CheckboxContainer>
    </FormSection>
  );
};

export default Q5Survey;
