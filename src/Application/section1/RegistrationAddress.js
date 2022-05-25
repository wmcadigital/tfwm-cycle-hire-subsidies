import PropTypes from "prop-types";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import Address from "../../common/Address/Address";

const RegistrationAddress = ({
  orderNo,
  registrationAddresses,
  setRegistrationAddresses,
}) => {
  const question = "What is your address?";

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text={question} />
      <Address
        prefix="formData"
        checkInside={true}
        orderNo={orderNo}
        addresses={registrationAddresses}
        setAddresses={setRegistrationAddresses}
      />
    </FormSection>
  );
};

RegistrationAddress.propTypes = {
  orderNo: PropTypes.number,
  registrationAddresses: PropTypes.arrayOf(PropTypes.object),
  setRegistrationAddresses: PropTypes.func,
};

export default RegistrationAddress;
