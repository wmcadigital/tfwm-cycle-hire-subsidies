import { useEffect } from "react";
import { useFormState, useForm } from "react-final-form";
import PropTypes from "prop-types";

import Question from "../common/Question";
import Checkbox from "../common/Checkbox";
import FieldError from "../common/FieldError";
import Table from "../common/Table";
import CheckAnswerRow from "../common/CheckAnswerRow";
import CheckboxContainer from "../common/CheckboxContainer";

const CheckAnswers = ({ setGoToPage }) => {
  const stateApi = useFormState();
  const formValues = stateApi.values.formData;
  const formApi = useForm();

  const agreeSelfCert = stateApi.submitFailed ? stateApi.errors?.legal : null;
  const agreeLegalError = stateApi.submitFailed ? stateApi.errors?.legal : null;

  useEffect(() => {
    formApi.mutators.setFormAttribute(
      "formData.SelfCertifiedApplication",
      false
    );
    formApi.mutators.setFormAttribute(
      "formData.Udprn",
      stateApi.values.udprn.toString()
    );
    formApi.mutators.setFormAttribute(
      "formData.Umprn",
      stateApi.values.umprn.toString()
    );
  }, [formApi.mutators, stateApi.values.udprn, stateApi.values.umprn]);

  return (
    <>
      <Question text="Check your answers" />
      <Table>
        <tbody>
          {formValues.FirstName ? (
            <CheckAnswerRow
              label="Your name"
              value={`${formValues["FirstName"]} ${formValues["LastName"]}`}
              changeValueCallback={() => setGoToPage(1)}
            />
          ) : (
            ""
          )}
          {formValues.DateOfBirth ? (
            <CheckAnswerRow
              label="Date of birth"
              value={`${formValues["DateOfBirth"]}`}
              changeValueCallback={() => setGoToPage(2)}
            />
          ) : (
            ""
          )}
          {formValues.AddressLine1 ? (
            <CheckAnswerRow
              label="Your address"
              value={`${formValues["AddressLine1"]} ${formValues["AddressLine2"]} ${formValues["PostCode"]}`}
              changeValueCallback={() => setGoToPage(3)}
            />
          ) : (
            ""
          )}
          {formValues.EmailAddress ? (
            <CheckAnswerRow
              label="Email address"
              value={
                formValues["EmailAddress"] ? formValues["EmailAddress"] : ""
              }
              changeValueCallback={() => setGoToPage(4)}
            />
          ) : (
            ""
          )}
          {formValues.Disability ? (
            <CheckAnswerRow
              label="Disabilities"
              value={`${
                formValues["Disability"].slice(0, 1).toUpperCase() +
                formValues["Disability"].slice(
                  1,
                  formValues["Disability"].length
                )
              }`}
              changeValueCallback={() => setGoToPage(5)}
            />
          ) : (
            ""
          )}
          {formValues.Employmentstatus ? (
            <CheckAnswerRow
              label="Employment Status"
              value={`${formValues["Employmentstatus"]}`}
              changeValueCallback={() => setGoToPage(7)}
            />
          ) : (
            ""
          )}
          {formValues.IsStartingANewJob ? (
            <CheckAnswerRow
              label="New Job"
              value={`${
                formValues["IsStartingANewJob"].slice(0, 1).toUpperCase() +
                formValues["IsStartingANewJob"].slice(
                  1,
                  formValues["IsStartingANewJob"].length
                )
              }`}
              changeValueCallback={() => setGoToPage(6)}
            />
          ) : (
            ""
          )}
          {formValues.BenefitType ? (
            <CheckAnswerRow
              label="Benefits"
              value={`${formValues["BenefitType"]}`}
              changeValueCallback={() => setGoToPage(7)}
            />
          ) : (
            ""
          )}
          {formValues.Files ? (
            <CheckAnswerRow
              label="Proof"
              value={`${formValues.Files[0].Name}`}
              changeValueCallback={() => setGoToPage(8)}
            />
          ) : (
            ""
          )}
          {formValues.ReferredbyMedicalService ? (
            <CheckAnswerRow
              label="Medical Service Referral"
              value={`${
                formValues["ReferredbyMedicalService"]
                  .slice(0, 1)
                  .toUpperCase() +
                formValues["ReferredbyMedicalService"].slice(
                  1,
                  formValues["ReferredbyMedicalService"].length
                )
              }`}
              changeValueCallback={() => setGoToPage(9)}
            />
          ) : (
            ""
          )}
          {formValues.WhereDidYouHearAboutTheScheme ? (
            <CheckAnswerRow
              label="Hear About us"
              value={`${formValues["WhereDidYouHearAboutTheScheme"]}`}
              changeValueCallback={() => setGoToPage(11)}
            />
          ) : (
            ""
          )}
          <tr>
            <th scope="row" data-header="Header 1">
              LACF Activity Baseline
            </th>
            <td data-header="Header 2">Completed</td>
            <td className="wmnds-text-align-right"></td>
          </tr>
        </tbody>
      </Table>
      <h3>Re-contact</h3>
      <p>
        We would like to be able to ask you about your experience of
        participating in Cycling for Everyone at a later date. If you agree, we
        will ask you for your contact details – name, email and phone number –
        so that we can get in touch. We will keep your contact details securely
        for a maximum of 18 months after the end of the activity and will not
        use them for any other purpose.
      </p>
      <CheckboxContainer>
        <Checkbox
          fieldName="formData.ReContact"
          label={<>Yes, willing to be re-contacted</>}
        />
      </CheckboxContainer>
      <h3>Self-certification</h3>
      <CheckboxContainer error={agreeLegalError}>
        <FieldError text={agreeLegalError} />
        <Checkbox
          fieldName="formData.SelfCertifiedEligibility"
          label={
            <>
              I do not own a suitable working bike, I am not able to buy a bike
              through a cycle to work scheme and I am not supported with travel
              costs for cycling.
            </>
          }
        />
        <Checkbox
          fieldName="formData.SurveyData.Vouchers"
          label={
            <>
              Tick the box if you want to be put forward for a chance to win 1
              prize of £50 in Amazon vouchers. The closing date for entries is
              the last day of the month you applied.
            </>
          }
        />
      </CheckboxContainer>

      <h3>Now send your request</h3>
      <p>
        By submitting this request you are confirming that, to the best of your
        knowledge, the details you are providing are correct.
      </p>
      <CheckboxContainer error={agreeSelfCert}>
        <FieldError text={agreeSelfCert} />
        <Checkbox
          fieldName="agreeTermsAndConditions"
          label={
            <>
              Agree to the{" "}
              <a
                href="https://www.tfwm.org.uk/terms-and-conditions/"
                target="_blank"
                rel="noreferrer"
              >
                terms and conditions
              </a>
            </>
          }
        />
        <Checkbox
          fieldName="agreePrivacyPolicy"
          label={
            <>
              Agree to the{" "}
              <a
                href="https://www.tfwm.org.uk/policies/"
                target="_blank"
                rel="noreferrer"
              >
                privacy policy
              </a>
            </>
          }
        />
      </CheckboxContainer>
    </>
  );
};

CheckAnswers.propTypes = {
  setGoToPage: PropTypes.func,
};

export default CheckAnswers;
