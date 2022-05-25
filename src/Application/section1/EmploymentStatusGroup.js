import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import RadioGroup from "../../common/RadioGroup";
import Question from "../../common/Question";
import RadioButton from "../../common/RadioButton";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const EmploymentStatusTypes = {
  fullTimeEmployment: {
    radioLabel: "Full-time Employment",
    detailLabel: "Full-time Employment",
  },
  partTimeEmployment: {
    radioLabel: "Part-time Employment",
    detailLabel: "Part-time Employment",
  },
  selfEmployed: { radioLabel: "Self-employed", detailLabel: "Self-employed" },
  unemployed: { radioLabel: "Unemployed", detailLabel: "Unemployed" },
  retired: { radioLabel: "Retired", detailLabel: "Retired" },
  student: { radioLabel: "Student", detailLabel: "Student" },
  other: { radioLabel: "Other", detailLabel: "Other" },
  preferNotToSay: {
    radioLabel: "Prefer not to say",
    detailLabel: "Prefer not to say",
  },
};

const EmploymentStatusGroup = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.Employmentstatus
      : null;

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="What is your employment status?" />
      <RadioGroup error={error}>
        <FieldError text={error} />
        {Object.keys(EmploymentStatusTypes).map((Employmentstatus, index) => (
          <RadioButton
            key={index}
            label={EmploymentStatusTypes[Employmentstatus].radioLabel}
            validation={required}
            value={EmploymentStatusTypes[Employmentstatus].radioLabel}
            fieldName="formData.Employmentstatus"
          />
        ))}
      </RadioGroup>
    </FormSection>
  );
};

export default EmploymentStatusGroup;
