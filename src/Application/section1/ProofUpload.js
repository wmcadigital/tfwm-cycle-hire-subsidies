import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import { required } from "../../common/validation";
import FileField from "../../common/FileField";

const ProofUpload = () => {
  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Upload proof of your income or benefits or proof of being a full-time student or on a programme" />
      <h3>Proof of your income or benefits</h3>
      <p>Your proof must include:</p>
      <ul>
        <li>your name</li>
        <li>your address</li>
        <li>your wage or name of your benefit</li>
        <li>show a date within the last 12 months</li>
        <li>an official company letter head or e-signature</li>
      </ul>
      
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
      <h3>Proof of being a full-time student</h3>
      {/* <ul>
        <li><a href="https://www.tfwm.org.uk/swift-and-tickets/discounts-and-free-travel-passes/discounts-for-students/supporting-documents-for-students/" target="_blank" rel="noreferrer">View supporting documents (new tab)</a></li>
      </ul> */}
      
        <p>A student ID card on its own if it shows all the following:</p>
          <ul>
            <li>your name</li>
            <li>your photo</li>
            <li>the name of your college or university</li>
          </ul>
        <p>If your student ID card does not show all these details, you&apos;ll also need to upload one of the following items:</p>
          <ul>
            <li>an official student finance letter</li>
            <li>an enrolment letter or email</li>
            <li>a letter or email from your college or university to confirm you are a full-time student</li>
          </ul>
            <p className="wmnds-inset-text">If your student ID card is unavailable, you&apos;ll need to upload two items from the list above.</p>
          <p>If you only have one of the items above, you&apos;ll also need to upload a copy of one of the following:</p>
          <ul>
            <li>your passport</li>
            <li>your driving licence</li>
            <li>a bank or credit card in your name</li>
          </ul>
      
      <p>All documents are subject to further validation and you or your college or university may be contacted for more information.</p>
      {/* <p>Your proof can be a screenshot of an email or a photo of a letter.</p> */}
      <h3>Proof of being on a programme for those not in education, training or employment</h3>
      <p>Proof of being on a programme must include one of the following:</p>
      <ul>
        <li>income assessed benefits as shown above</li>
        <li>letter from finance team where you are registered on a programme confirming you meet the income assessed requirements</li>
      </ul>
      <h3>Upload Documents</h3>
      <p className="wmnds-inset-text">Files must be in JPEG, PNG or PDF file format.</p>
      <FileField name="formData.Files" validation={required} />
    </FormSection>
  );
};

export default ProofUpload;
