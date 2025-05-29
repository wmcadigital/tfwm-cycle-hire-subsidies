import { useFormState, useForm } from "react-final-form";
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
  const formApi = useForm();

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
  const [buttonClicked, setButtonClicked] = useState(false);
  const [errorCheckingEmail, setErrorCheckingEmail] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkEmail = async () => {
    const email = formValues?.formData?.EmailAddress;
    if (email) {
      try {
        const response = await axios.post('https://cyclehirelvslj7pmwltf4.azurewebsites.net/api/ManagementConsoleLink', {
          applicationId: '',
          email: emailAddress
        });
        setButtonClicked(true);
        if (response.data.message === 'user already exists') {
          setUserExists(true);
          navigate('/registered', { state: { emailAddress } });
        } else {
          setUserExists(false);
          setEmailAddress(email);
          formApi.mutators.setFormAttribute("formData.emailAddressHidden", email);
        }
        setErrorCheckingEmail(false);
      } catch (error) {
        setUserExists(false);
        setEmailAddress(email);
        formApi.mutators.setFormAttribute("formData.emailAddressHidden", email);
        setErrorCheckingEmail(true);
      }
    }
  };

  useEffect(() => {
    console.log('buttonClicked:', buttonClicked);
    console.log('userExists:', userExists);
    console.log('errorCheckingEmail:', errorCheckingEmail);
  }, [buttonClicked, userExists, errorCheckingEmail]);

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
        onChange={(e) => setEmailAddress(e.target.value)}
      />
      <TextInput
        fieldName="formData.emailAddressHidden"
        label="emailAddressHidden"
        validation={required}
        error={errorEmailAddressHidden}
        defaultValue={emailAddress}
        containerClass="hide"
        isRequired={true}
      />
      {userExists && <p>Email address already registered. You no longer need to re-apply every financial year for GoCycle. You will automatically receive a new code if you are still eligible.</p>}
      <button className="wmnds-btn wmnds-btn--primary" type="button" onClick={() => checkEmail()}>Check email</button>
      {!userExists && buttonClicked && !errorCheckingEmail && <p>Email address is eligible. You can proceed with your application.</p>}
      {errorCheckingEmail && 
        <>
        <div className="wmnds-m-t-md wmnds-msg-summary wmnds-msg-summary--info ">
          <div className="wmnds-msg-summary__header">
            <svg className="wmnds-msg-summary__icon">
              <use xlinkHref="#wmnds-general-info" href="#wmnds-general-info"></use>
            </svg>
            <h3 className="wmnds-msg-summary__title">Not yet registered</h3>
          </div>
          <div className="wmnds-msg-summary__info">
            You are not yet registered. Click continue to register and apply.
          </div>
        </div>
        </>
      }
    </FormSection>
  );
};

export default EmailAddress;
