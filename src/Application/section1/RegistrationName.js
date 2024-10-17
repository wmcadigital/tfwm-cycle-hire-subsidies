import { useFormState } from "react-final-form";

import { required, name, composeValidators } from "../../common/validation";
import FormSection from "../../common/FormSection";
import Question from "../../common/Question";
import ProgressIndicator from "../../common/ProgressIndicator";
import TextInput from "../../common/TextInput";

const RegistrationName = () => {
  const stateApi = useFormState();

  const errorFirstName =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.FirstName
      : null;

  const errorLastName =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.LastName
      : null;

  const question = "What is your name";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text={question} isRequired={true} />
      <TextInput
        fieldName="formData.FirstName"
        label="First Name"
        validation={composeValidators(required, name)}
        error={errorFirstName}
        isRequired={true}
      />
      <TextInput
        fieldName="formData.LastName"
        label="Last Name"
        validation={composeValidators(required, name)}
        error={errorLastName}
        isRequired={true}
      />
    </FormSection>
  );
};

export default RegistrationName;
