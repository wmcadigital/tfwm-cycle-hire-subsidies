import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import RadioGroup from "../../common/RadioGroup";
import Question from "../../common/Question";
import RadioButton from "../../common/RadioButton";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const DisabilityTypes = {
  yes: { radioLabel: "Yes", detailLabel: "yes" },
  no: { radioLabel: "No", detailLabel: "no" },
};

const NewJobGroup = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.IsStartingANewJob
      : null;

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Are you starting a new job?" />
      <RadioGroup error={error}>
        <FieldError text={error} />
        {Object.keys(DisabilityTypes).map((IsStartingANewJob, index) => (
          <RadioButton
            key={index}
            label={DisabilityTypes[IsStartingANewJob].radioLabel}
            validation={required}
            value={IsStartingANewJob}
            fieldName="formData.IsStartingANewJob"
          />
        ))}
      </RadioGroup>
    </FormSection>
  );
};

export default NewJobGroup;
