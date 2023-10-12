import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import RadioGroup from "../../common/RadioGroup";
import Question from "../../common/Question";
import RadioButton from "../../common/RadioButton";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const BenefitTypes = {
  no: { radioLabel: "No", detailLabel: "no" },
  yesUniversalCredit: {
    radioLabel: "Yes - Universal Credit",
    detailLabel: "Yes - Universal Credit",
  },
  yesJobSeekersAllowance: {
    radioLabel: "Yes - Job Seekers Allowance (JSA)",
    detailLabel: "Yes - Job Seekers Allowance (JSA)",
  },
  yesChildBenefit: {
    radioLabel: "Yes - Child Benefit",
    detailLabel: "Yes - Child Benefit",
  },
  yesEmploymentSupportAllowance: {
    radioLabel: "Yes - Employment Support Allowance (ESA)",
    detailLabel: "Yes - Employment Support Allowance (ESA)",
  },
  yesHousingBenefit: {
    radioLabel: "Yes - Housing Benefit",
    detailLabel: "Yes - Housing Benefit",
  },
  yesOtherIncomeAssessedBenefit: {
    radioLabel: "Yes - Other income assessed benefit",
    detailLabel: "Yes - Other income assessed benefit",
  },
  yesStudentIncomeAssessedSupport: {
    radioLabel: "Yes - Student income assessed support",
    detailLabel: "Yes - Student income assessed support",
  },
};

const BenefitsGroup = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.BenefitType
      : null;

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Do you receive benefits? *" isRequired={true} />
      <RadioGroup error={error}>
        <FieldError text={error} />
        {Object.keys(BenefitTypes).map((BenefitType, index) => (
          <RadioButton
            key={index}
            label={BenefitTypes[BenefitType].radioLabel}
            validation={required}
            value={BenefitTypes[BenefitType].radioLabel}
            fieldName="formData.BenefitType"
          />
        ))}
      </RadioGroup>
    </FormSection>
  );
};

export default BenefitsGroup;
