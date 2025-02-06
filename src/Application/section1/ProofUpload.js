import { useEffect } from "react";
import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import { required } from "../../common/validation";
import FileField from "../../common/FileField";

const ProofUpload = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Upload proof of your status"  />
      <p>Check which proof applies to your status, then upload your documents below.</p>
      <h3>If you are a full-time student</h3>
      {/* <ul>
        <li><a href="https://www.tfwm.org.uk/swift-and-tickets/discounts-and-free-travel-passes/discounts-for-students/supporting-documents-for-students/" target="_blank" rel="noreferrer">View supporting documents (new tab)</a></li>
      </ul> */}
        <p>A student ID card on its own if it shows all the following:</p>
          <ul>
            <li>your name</li>
            <li>your photo</li>
            <li>the name of your college or university</li>
            <li>either your course or academic year or term end date</li>
          </ul>
          <details className="wmnds-details">
          <summary className="wmnds-link">
            Help if your student ID card does not show all these details
          </summary>
            <div className="wmnds-details__content">
              <p>If your student ID card does not show all these details, you&apos;ll also need to upload one of the following items:</p>
              <ul>
                <li>an official student finance letter</li>
                <li>an enrolment letter or email</li>
                <li>a letter or email from your college or university to confirm you are a full-time student</li>
              </ul>
            </div>
        </details>
        <details className="wmnds-details">
          <summary className="wmnds-link">
            Help if your student ID card is unavailable
          </summary>
            <div className="wmnds-details__content">
              <p>If your student ID card is unavailable, you&apos;ll need to upload two items from the following list:</p>
            <ul>
                <li>an official student finance letter</li>
                <li>an enrolment letter or email</li>
                <li>a letter or email from your college or university to confirm you are a full-time student</li>
              </ul>
              <p>If you only have one of the items above, you&apos;ll also need to upload a copy of one of the following:</p>
              <ul>
                <li>your passport</li>
                <li>your driving licence</li>
                <li>a bank or credit card in your name</li>
              </ul>
            </div>
        </details>
        <br />
      <p className="wmnds-inset-text">All documents are subject to further validation and you or your college or university may be contacted for more information.</p>
      {/* <p>Your proof can be a screenshot of an email or a photo of a letter.</p> */}
      <h3>If you are employed or receive benefits</h3>
      <p>Your proof must include:</p>
      <ul>
        <li>your name</li>
        <li>your address</li>
        <li>your wage or name of your benefit</li>
        <li>show a date within the last 12 months</li>
        <li>an official company letter head or e-signature</li>
      </ul>
      <details className="wmnds-details">
        <summary className="wmnds-link">
          Help with benefits
        </summary>
        <div className="wmnds-details__content">
          <p>Proof of benefit can include one of the following:</p>
            <ul>
              <li>Housing benefit</li>
              <li>Universal Credit</li>
              <li>Job Seekers Allowance</li>
              <li>Council Tax Support</li>
              <li>Income Support</li>
              <li>Pension Credit</li>
              <li>Other UK income assessed benefit</li>
              {/* <li>employment support allowance (ESA)</li>
              <li>universal credit</li>
              <li>housing benefit</li>
              <li>job seekers allowance (JSA)</li>
              <li>student income assessed support letter</li>
              <li>other income assessed benefit</li> */}
            </ul>
        </div>
      </details>
      <h3>If you are attending an organisation supporting people not in education, training or employment</h3>
      <p>Your proof must include:</p>
      <ul>
        <li>letter from the organisation supporting you confirming you meet the income assessed requirements</li>
      </ul>
      <h2>Upload Documents</h2>
      <p>Use the button to upload your required proof.</p>
      <p className="wmnds-inset-text">Files must be in JPEG, PNG or PDF file format.</p>
      <FileField name="formData.Files" validation={required} />
    </FormSection>
  );
};

export default ProofUpload;
