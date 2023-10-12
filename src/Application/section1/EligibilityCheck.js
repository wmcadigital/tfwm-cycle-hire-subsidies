import FormSection from "../../common/FormSection";
import Question from "../../common/Question";
import Address from "../../common/Eligibility/Address";

const EligibilityCheck = () => {
  const question = "Are you eligible?";

  return (
    <FormSection>
      <p>Eligibility Checker</p>
      <Question text={question} />
      <p>Check if you live in an eligible area then click continue to apply.</p>
      <Address
        prefix="formData"
        btnText="Check eligibility"
        checkInside={true}
        isRequired={true}
      />
    </FormSection>
  );
};

export default EligibilityCheck;
