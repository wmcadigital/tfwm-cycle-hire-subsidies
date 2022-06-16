import PropTypes from "prop-types";

import FormSection from "../../common/FormSection";
import Question from "../../common/Question";
import Address from "../../common/Eligibility/Address";

const EligibilityCheck = ({}) => {
  
  const question = "Are you eligible?";

  return (
    <FormSection>
      <p>Eligibility Checker</p>
      <Question text={question} />
      <Address
        prefix="formData"
        btnText="Check eligibility"
        checkInside={true}
      />
    </FormSection>
  );
};

export default EligibilityCheck;
