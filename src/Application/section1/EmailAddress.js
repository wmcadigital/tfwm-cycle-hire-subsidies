import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import TextInput from "../../common/TextInput";
import { required, email, composeValidators } from "../../common/validation";

const EmailAddress = () => {
  const stateApi = useFormState();

  const formValues = stateApi.values;
  const question = "What is your email address?";
  formValues["registerForYourself"] === "yes";

  const errorEmailAddress =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.EmailAddress
      : null;

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text={question} />
      <p>We’ll only use this to contact you about your application.</p>
      <TextInput
        fieldName="formData.EmailAddress"
        label={
          <>
            Email address
            <p>For example, name@example.com</p>
          </>
        }
        error={errorEmailAddress}
        validation={composeValidators(required, email)}
      />
    </FormSection>
  );
};

export default EmailAddress;
