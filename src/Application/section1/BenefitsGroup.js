import { useFormState } from "react-final-form";
import { useEffect } from "react";
import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import RadioGroup from "../../common/RadioGroup";
import Question from "../../common/Question";
import RadioButton from "../../common/RadioButton";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const BenefitTypes = {
  noStudent: {
    radioLabel: "No - I'm a full-time Student",
    detailLabel: "No - I'm a full-time Student",
  },
  noEmployed: {
    radioLabel: "No - I'm employed and earn under £30,000",
    detailLabel: "No - Employed and earn under £30,000",
  },
  noIncomeAssessedSupport: {
    radioLabel:
      "No – I am attending an organisation supporting me because I’m not in education, employment or training.",
    detailLabel:
      "No – I am attending an organisation supporting me because I’m not in education, employment or training.",
  },
  // yesStudentOrEmployedBenefits: {radioLabel: "Yes - I am in education, employment or training and receive at least one benefit", detailLabel: "Yes - I am in education, employment or training and receive at least one benefit"},
  yesBenefits: {
    radioLabel: "Yes - I currently receive at least one benefit",
    detailLabel: "Yes - I currently receive at least one benefit",
  },
  // yesHousingBenefit: {
  //   radioLabel: "Yes - Housing benefit",
  //   detailLabel: "Yes - Housing benefit",
  // },
  // yesUniversalCredit: {
  //   radioLabel: "Yes - Universal Credit",
  //   detailLabel: "Yes - Universal Credit",
  // },
  // yesJobSeekersAllowance: {
  //   radioLabel: "Yes - Job Seekers Allowance (JSA)",
  //   detailLabel: "Yes - Job Seekers Allowance (JSA)",
  // },
  // yesCouncilTaxSupport: {
  //   radioLabel: "Yes - Council Tax Support",
  //   detailLabel: "Yes - Council Tax Support",
  // },
  // yesIncomeSupport: {
  //   radioLabel: "Yes - Income Support",
  //   detailLabel: "Yes - Income Support",
  // },
  // yesPensionCredit: {
  //   radioLabel: "Yes - Pension Credit",
  //   detailLabel: "Yes - Pension Credit",
  // },
  // yesOtherUKIncomeAssessedBenefit: {
  //   radioLabel: "Yes - Other UK income assessed benefit ",
  //   detailLabel: "Yes - Other UK income assessed benefit ",
  // },
  // yesChildBenefit: {
  //   radioLabel: "Yes - Child Benefit",
  //   detailLabel: "Yes - Child Benefit",
  // },
  // yesEmploymentSupportAllowance: {
  //   radioLabel: "Yes - Employment Support Allowance (ESA)",
  //   detailLabel: "Yes - Employment Support Allowance (ESA)",
  // },
  // yesOtherIncomeAssessedBenefit: {
  //   radioLabel: "Yes - Other income assessed benefit",
  //   detailLabel: "Yes - Other income assessed benefit",
  // },
  // yesStudentIncomeAssessedSupport: {
  //   radioLabel: "Yes - Student income assessed support",
  //   detailLabel: "Yes - Student income assessed support",
  // },
};

const BenefitsGroup = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.BenefitType
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Do you receive benefits? *" isRequired={true} />
      <details className="wmnds-details">
        <summary className="wmnds-link">Help with benefits</summary>
        <div className="wmnds-details__content">
          <p>Benefits can include any of the following:</p>
          <ul>
            <li>Housing benefit</li>
            <li>Universal Credit</li>
            <li>Job Seekers Allowance</li>
            <li>Council Tax Support</li>
            <li>Income Support</li>
            <li>Pension Credit</li>
            <li>Other UK income assessed benefit</li>
            {/* <li>employment support allowance (ESA)</li>
              <li>universal credit</li>
              <li>housing benefit</li>
              <li>job seekers allowance (JSA)</li>
              <li>student income assessed support letter</li>
              <li>other income assessed benefit</li> */}
          </ul>
        </div>
      </details>
      <br />
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
