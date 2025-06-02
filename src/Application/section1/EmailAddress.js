import { useFormState, useForm } from "react-final-form";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import TextInput from "../../common/TextInput";
import Checkbox from "../../common/Checkbox";
import { required, email, composeValidators } from "../../common/validation";
import axios from "axios";
import fetchEmail from "../../common/Eligibility/api/fetchEmail";

const EmailAddress = () => {
  const stateApi = useFormState();
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

  const [emailAddress, setEmailAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const formState = useFormState();

  const [userExists, setUserExists] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [errorCheckingEmail, setErrorCheckingEmail] = useState();
  const [emailExists, setEmailExists] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSentError, setEmailSentError] = useState(false);
  const [activeAccount, setActiveAccount] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
    // formApi.mutators.setFormAttribute("activeAccount", false);
  }, [formApi.mutators]);

  const checkEmail = async () => {
    const application = "";
    const email = formValues?.formData?.EmailAddress;
    if (email) {
      setLoading(true);
      const registered = await fetchEmail(application, email);
      // console.log("registered", registered);
      setEmailExists(true);
      // if not eligible send to error page
      if (registered.status !== 200) {
        // console.log("user not registered");
        formApi.mutators.setFormAttribute("registered", "no");
        setUserExists(false);
        setActiveAccount(false);
        setErrorCheckingEmail(true);
        setEmailAddress(email);
        formApi.mutators.setFormAttribute("activeAccount", false);
        formApi.mutators.setFormAttribute("checkEmail", true);
        formApi.mutators.setFormAttribute("formData.emailAddressHidden", email);
        setLoading(false);
        return;
      } else {
        // console.log("user is registered");
        setUserExists(true);
        setActiveAccount(true);
        formApi.mutators.setFormAttribute("activeAccount", true);
        formApi.mutators.setFormAttribute("registered", "yes");
        formApi.mutators.setFormAttribute("formData.emailAddressHidden", email);
        setErrorCheckingEmail(false);
        setLoading(false);
        return;
      }
    } else {
      // console.error("Email address is not provided.");
      setEmailExists(false);
    }
  };

  const resendEmail = async () => {
    const email = formValues?.formData?.EmailAddress;
    if (email) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT_MANAGE}/api/ManagementConsoleLink`,
          {
            email: email,
            applicationId: "sendit",
          }
        );
        // setButtonClicked(true);
        if (response.status === 200) {
          setEmailSent(true);
          // console.log("Email sent successfully");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setEmailSentError(true);
      }
    }
  };

  useEffect(() => {}, [loading, buttonClicked, userExists, errorCheckingEmail]);

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
        disab={userExists}
        onChange={(e) => {
          setEmailAddress(e.target.value);
        }}
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
      <Checkbox
        fieldName="activeAccount"
        label="activeAccount"
        validation={required}
        defaultValue={userExists}
        containerClass="hide"
      />
      <Checkbox
        fieldName="errorCheckingEmail"
        label="errorCheckingEmail"
        validation={required}
        defaultValue={errorCheckingEmail}
        containerClass="hide"
      />
      {userExists && (
        <>
          <div className="wmnds-m-t-md wmnds-msg-summary wmnds-msg-summary--info ">
            <div className="wmnds-msg-summary__header">
              <svg className="wmnds-msg-summary__icon">
                <use
                  xlinkHref="#wmnds-general-info"
                  href="#wmnds-general-info"
                ></use>
              </svg>
              <h3 className="wmnds-msg-summary__title">
                Email address already registered.
              </h3>
            </div>
            <div className="wmnds-msg-summary__info">
              If you have lost your code, you do not need to start a new
              application. Please refer to your original registration email.
              <br />
              <br />
              {!emailSent && (
                <button
                  className="wmnds-btn wmnds-btn--primary"
                  type="button"
                  onClick={() => resendEmail()}
                >
                  Resend email
                </button>
              )}
              {emailSent && (
                <p>
                  <strong>Email has been sent</strong>
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {!userExists && (
        <button
          className="wmnds-btn wmnds-btn--primary"
          type="button"
          onClick={() => {
            formApi.submit();
            checkEmail();
          }}
        >
          Check if your already registered
          {loading ? (
            <div
              className="wmnds-loader wmnds-loader--btn wmnds-btn__icon wmnds-btn__icon--right"
              role="alert"
              aria-live="assertive"
            >
              <p className="wmnds-loader__content"></p>
            </div>
          ) : null}
        </button>
      )}

      {!userExists && buttonClicked && !errorCheckingEmail && (
        <p>Email address is eligible. You can proceed with your application.</p>
      )}
      {(errorCheckingEmail || (formState.values && typeof formState.values.activeAccount !== "undefined" && !formState.values.activeAccount)) && (
        <>
          <div className="wmnds-m-t-md wmnds-msg-summary wmnds-msg-summary--info ">
            <div className="wmnds-msg-summary__header">
              <svg className="wmnds-msg-summary__icon">
                <use
                  xlinkHref="#wmnds-general-info"
                  href="#wmnds-general-info"
                ></use>
              </svg>
              <h3 className="wmnds-msg-summary__title">Not yet registered</h3>
            </div>
            <div className="wmnds-msg-summary__info">
              You are not yet registered. Click continue to register and apply.
            </div>
          </div>
        </>
      )}
    </FormSection>
  );
};

export default EmailAddress;
