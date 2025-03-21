import { useFormState } from "react-final-form";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import TextInput from "../../common/TextInput";
import { required, email, composeValidators } from "../../common/validation";
import axios from 'axios';

const EmailAddress = () => {
  const stateApi = useFormState();
  const navigate = useNavigate();

  const formValues = stateApi.values;
  const question = "What is your email address?";
  formValues["registerForYourself"] === "yes";

  const errorEmailAddress =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.EmailAddress
      : null;

  const errorEmailAddressHidden =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.EmailAddressHidden
      : null;

  const [emailAddress, setEmailAddress] = useState('');
  const [userExists, setUserExists] = useState(false);
  
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkEmail = async () => {
    const email = formValues.formData.EmailAddress;
    console.log(email);
    if (email) {
      try {
        const response = await axios.post('https://cyclehire3lnmrzn346l4o.azurewebsites.net/api/ManagementConsoleLink', {
          applicationId: '',
          email: emailAddress
        });
        if (response.data.message === 'user already exists') {
          setUserExists(true);
          navigate('/registered');
          console.log('user exists');
        } else {
          setUserExists(false);
          setEmailAddress(email);
          console.log('user does not exist');
        }
      } catch (error) {
        console.error('Error checking email:', error);
        setUserExists(false);
        setEmailAddress(email);
        console.log('error checking email');
      }
    }
  };
console.log(formValues)
  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text={question} isRequired={true} />
      <p>We’ll only use this to contact you about your application.</p>
      <TextInput
        fieldName="formData.EmailAddress"
        label={
          <>
            Email address <br />
            For example, name@example.com
          </>
        }
        error={errorEmailAddress}
        validation={composeValidators(required, email)}
        isRequired={true}
      />
      <TextInput
        fieldName="formdata.emailAddressHidden"
        label="emailAddressHidden"
        validation={required}
        error={errorEmailAddressHidden}
        defaultValue={emailAddress}
        containerClass="hide"
        isRequired={true}
      />
      {userExists && <p>Email address already registered. You no longer need to re-apply every financial year for GoCycle. You will automatically receive a new code if you are still eligible.</p>}
      <button type="button" onClick={() => checkEmail()}>Check email</button>
    </FormSection>
  );
};

export default EmailAddress;
