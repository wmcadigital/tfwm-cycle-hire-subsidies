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

const DisabilityGroup = () => {
  const stateApi = useFormState();
  const formValues = stateApi.values;
  const formApi = useForm();

  const error = stateApi.submitFailed ? stateApi.errors?.DisabilityQ : null;

  const DisabilityTypeError = stateApi.submitFailed && stateApi.hasValidationErrors
    ? stateApi.errors?.DisabilityType
    : null;

  useEffect(() => {
    if (formValues.DisabilityQ) {
      if (
        formValues.DisabilityQ === "yes" &&
        formValues.DisabilityType !== null
      ) {
        formApi.mutators.setFormAttribute(
          "formData.Disability",
          "Yes: " + formValues.DisabilityType
        );
      } else {
        formApi.mutators.setFormAttribute("formData.Disability", "None");
      }
    }
  }, [formApi.mutators, formValues.DisabilityQ, formValues.DisabilityType]);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Do you have a disability?" />
      <RadioGroup error={error}>
        <FieldError text={error} />
        <RadioButton
          key={1}
          label="Yes"
          validation={required}
          value="yes"
          fieldName="DisabilityQ"
        />
        {formValues.DisabilityQ === "yes" ? (
          <TextInput
            label="What is your disability?"
            fieldName="DisabilityType"
            validation={required}
            error={DisabilityTypeError}
          />
        ) : null}
        <RadioButton
          key={2}
          label="No"
          validation={required}
          value="no"
          fieldName="DisabilityQ"
        />
      </RadioGroup>

      {/* <TextInput
            label="Test"
            fieldName="DisabilityFull"
            // {...getInputProps()}
          /> */}
    </FormSection>
  );
};

export default DisabilityGroup;
