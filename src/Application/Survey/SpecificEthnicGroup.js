import { useEffect } from "react";
import { useFormState, useForm } from "react-final-form";

import Ethnicity, { PreferNotToSayLabel } from "./Ethnicity";
import FormSection from "../../common/FormSection";
import RadioGroup from "../../common/RadioGroup";
import Question from "../../common/Question";
import RadioButton from "../../common/RadioButton";
import FieldError from "../../common/FieldError";
import ProgressIndicator from "../../common/ProgressIndicator";
import { required } from "../../common/validation";

const SpecificEthnicGroup = () => {
  const stateApi = useFormState();
  const formApi = useForm();

  const formValues = stateApi.values;
  const ethnicity = formValues["ethnicity"];
  const ethnicityLabel =
    ethnicity === "other" ? null : Ethnicity[ethnicity].label;
  const specificEthnicity = Ethnicity[ethnicity].specific;
  const question = "Which of the following best describes your background?";

  const error = stateApi.submitFailed && stateApi.hasValidationErrors
    ? stateApi.errors?.specificEthnicity
    : null;

  useEffect(() => {
    if (formValues.ethnicity) {
      if (
        formValues.ethnicity !== null &&
        formValues.specificEthnicity !== null
      ) {
        formApi.mutators.setFormAttribute(
          "formData.Ethnicity",
          formValues.ethnicity + " " + formValues.specificEthnicity
        );
      } else {
        formApi.mutators.setFormAttribute("formData.Ethnicity", "N/A");
      }
    }
  }, [formApi.mutators, formValues.ethnicity, formValues.specificEthnicity]);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <Question text={question} />
      <RadioGroup error={error}>
        <FieldError text={error} />
        {Object.keys(specificEthnicity).map((ethnicity, index) => (
          <RadioButton
            key={index}
            label={specificEthnicity[ethnicity].label}
            validation={required}
            value={ethnicity}
            fieldName="specificEthnicity"
          />
        ))}
        <p className="wmrards-m-b-sm">Or</p>
        <RadioButton
          key="preferNotToSay"
          label={PreferNotToSayLabel["preferNotToSay"]}
          validation={required}
          value="preferNotToSay"
          fieldName="specificEthnicity"
        />
      </RadioGroup>
    </FormSection>
  );
};

export default SpecificEthnicGroup;
