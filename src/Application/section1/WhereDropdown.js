import { useEffect } from "react";
import { useFormState, useForm } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import Dropdown from "../../common/Dropdown";
import TextInput from "../../common/TextInput";
import { required } from "../../common/validation";

const whereOptions = [
  { value: "TfWM Website", label: "TfWM Website" },
  { value: "Leaflet", label: "Leaflet" },
  { value: "Posters", label: "Posters" },
  { value: "Event", label: "Event" },
  { value: "Employer", label: "Employer" },
  { value: "Social Prescribing", label: "Social Prescribing" },
  { value: "Social Media", label: "Social Media" },
  { value: "Jobcentre", label: "Jobcentre" },
  { value: "Community Centre", label: "Community Centre" },
  { value: "Word of mouth", label: "Word of mouth" },
  {
    value: "West Midlands Cycle Hire web page",
    label: "West Midlands Cycle Hire web page",
  },
  {
    value: "Cycling for Everyone activity",
    label: "Cycling for Everyone activity",
  },
  { value: "News", label: "News" },
  { value: "Other", label: "Other" },
];

const WhereDropdown = () => {
  const stateApi = useFormState();
  const formValues = stateApi.values;
  const formApi = useForm();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.Q10
      : null;

  const errorOther =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.Q10b
      : null;

  // copy q8 value to survey data
  useEffect(() => {
    formApi.mutators.setFormAttribute(
      "formData.SurveyData.q10",
      stateApi.values.q10
    );
  }, [formApi.mutators, stateApi.values.q10]);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question
        text="Where did you hear about this scheme?"
        isRequired={true}
      />
      <Dropdown
        fieldName="q10"
        error={error}
        label="Select one option"
        options={whereOptions}
        validation={required}
        isRequired={true}
      />
      {formValues.q10 === "Other" ? (
        <TextInput
          fieldName="formData.SurveyData.q10b"
          label="Q10b - Please provide more details eg location, website:"
          validation={required}
          error={errorOther}
          isRequired={true}
        />
      ) : null}
    </FormSection>
  );
};

export default WhereDropdown;
