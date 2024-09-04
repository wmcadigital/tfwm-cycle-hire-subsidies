import { useEffect } from "react";
import { useFormState, useForm } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import RadioGroup from "../../common/RadioGroup";
import Question from "../../common/Question";
import RadioButton from "../../common/RadioButton";
import TextInput from "../../common/TextInput";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const EmploymentStatusTypes = {
  fullTimeEmployment: {
    radioLabel: "Full-time paid employment",
    detailLabel: "Full-time paid employment",
  },
  partTimeEmployment: {
    radioLabel: "Part-time paid employment",
    detailLabel: "Part-time paid employment",
  },
  fullTimeSelfEmployment: {
    radioLabel: "Full-time self-employment",
    detailLabel: "Full-time self-employment",
  },
  partTimeSelfEmployment: {
    radioLabel: "Part-time self-employment",
    detailLabel: "Part-time self-employment",
  },
  unemployed: { radioLabel: "Unemployed", detailLabel: "Unemployed" },
  retired: { radioLabel: "Retired", detailLabel: "Retired" },
  looking: {
    radioLabel: "Looking after the home or family",
    detailLabel: "Looking after the home or family",
  },
  student: {
    radioLabel: "Full-time student",
    detailLabel: "Full-time student",
  },
  tempSick: {
    radioLabel: "Temporarily sick or disabled",
    detailLabel: "Temporarily sick or disabled",
  },
  longSick: {
    radioLabel: "Long term sick or disabled",
    detailLabel: "Long term sick or disabled",
  },
  other: { radioLabel: "Other", detailLabel: "Other" },
  // preferNotToSay: {
  //   radioLabel: "Prefer not to say",
  //   detailLabel: "Prefer not to say",
  // },
};

const EmploymentStatusGroup = () => {
  const stateApi = useFormState();
  const formValues = stateApi.values;
  const formApi = useForm();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.Employmentstatus
      : null;

  const q18berror =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q18b
      : null;

    // copy q18 value to survey data
    useEffect(() => {
      formApi.mutators.setFormAttribute(
        "formData.SurveyData.q18",
        stateApi.values.q18
      );
    }, [formApi.mutators, stateApi.values.q18]);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Q18 - What is your employment status? *" isRequired={true} />
      <RadioGroup error={error}>
        <FieldError text={error} />
        {Object.keys(EmploymentStatusTypes).map((Employmentstatus, index) => (
          <RadioButton
            key={index}
            label={EmploymentStatusTypes[Employmentstatus].radioLabel}
            validation={required}
            value={EmploymentStatusTypes[Employmentstatus].radioLabel}
            fieldName="q18"
          />
        ))}
      </RadioGroup>
      {formValues.q19 === "Other" ? (
        <TextInput
          fieldName="formData.SurveyData.q18b"
          label="Q18b - What are the main reasons that you feel not very safe/not at all safe cycling on roads in your local area?"
          validation={required}
          error={q18berror}
          isRequired={true}
        />
      ) : null}
    </FormSection>
  );
};

export default EmploymentStatusGroup;
