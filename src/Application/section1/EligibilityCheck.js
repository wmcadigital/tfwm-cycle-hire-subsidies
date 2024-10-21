import FormSection from "../../common/FormSection";
import Question from "../../common/Question";
import Address from "../../common/Eligibility/Address";
import { useEffect } from "react";

const EligibilityCheck = () => {
  const question = "Are you eligible?";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
