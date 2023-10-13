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
  prefer: { radioLabel: "Prefer not to say", detailLabel: "Prefer not to say" },
};

const MedicalServiceGroup = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.ReferredbyMedicalService
      : null;

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Were you referred by a medical service? For example a GP or link worker *" isRequired={true} />
      <RadioGroup error={error}>
        <FieldError text={error} />
        {Object.keys(DisabilityTypes).map((ReferredbyMedicalService, index) => (
          <RadioButton
            key={index}
            label={DisabilityTypes[ReferredbyMedicalService].radioLabel}
            validation={required}
            value={ReferredbyMedicalService}
            fieldName="formData.ReferredbyMedicalService"
          />
        ))}
      </RadioGroup>
    </FormSection>
  );
};

export default MedicalServiceGroup;
