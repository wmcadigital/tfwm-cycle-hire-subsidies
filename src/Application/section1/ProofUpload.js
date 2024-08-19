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
      <Question text="Upload proof of your income or benefits or proof of being a full time student" />
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
        <li>employment support allowance (ESA)</li>
        <li>universal credit</li>
        <li>housing benefit</li>
        <li>job seekers allowance (JSA)</li>
        <li>student income assessed support letter</li>
        <li>other income assessed benefit</li>
      </ul>
      <p>Proof of being a full time student:</p>
      <ul>
        <li><a href="https://www.tfwm.org.uk/swift-and-tickets/discounts-and-free-travel-passes/discounts-for-students/supporting-documents-for-students/" target="_blank" rel="noreferrer">View supporting documents (new tab)</a></li>
      </ul>

      <p>Your proof can be a screenshot of an email or a photo of a letter.</p>

      <p>Files must be jpeg, png or pdf file format</p>
      <FileField name="formData.Files" validation={required} />
    </FormSection>
  );
};

export default ProofUpload;
