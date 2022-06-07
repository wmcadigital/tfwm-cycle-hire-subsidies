import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Layout
import FormContentWrapper from "../common/FormContentWrapper";
import Header from "../common/Header";
import FormWizard from "../common/FormWizard";

// Main form
import Introduction from "./Introduction/Introduction";
import EligibilityCheck from "./section1/EligibilityCheck";
import RegistrationName from "./section1/RegistrationName";
import DateOfBirth from "./section1/DateOfBirth";
import EmailAddress from "./section1/EmailAddress";
import RegistrationAddress from "./section1/RegistrationAddress";
import DisabilityGroup from "./section1/DisabilityGroup";
import EmploymentStatusGroup from "./section1/EmploymentStatusGroup";
import NewJobGroup from "./section1/NewJobGroup";
import BenefitsGroup from "./section1/BenefitsGroup";
import ProofUpload from "./section1/ProofUpload";
import MedicalServiceGroup from "./section1/MedicalServiceGroup";
import WhereDropdown from "./section1/WhereDropdown";

// Survey
import SurveyIntro from "./Survey/SuveyIntro";
import Q1Survey from "./Survey/Q1Survey";
import Q2Survey from "./Survey/Q2Survey";
import Q3Survey from "./Survey/Q3Survey";
import Q4Survey from "./Survey/Q4Survey";
import Q5Survey from "./Survey/Q5Survey";
import Q6Survey from "./Survey/Q6Survey";
import Q7Survey from "./Survey/Q7Survey";
import Q8Survey from "./Survey/Q8Survey";
import Q9Survey from "./Survey/Q9Survey";
import Q10Survey from "./Survey/Q10Survey";
import EthnicGroup from "./Survey/EthnicGroup";
import SpecificEthnicGroup from "./Survey/SpecificEthnicGroup";

import { validateSelectOneOption } from "../common/validation";

import CheckAnswers from "./CheckAnswers";
import {
  validateDateOfBirth,
  addressIdPresent,
  validateCheckAnswers,
} from "./validation";

const ApplicationForm = () => {
  const location = useLocation();
  const [registrationAddresses, setRegistrationAddresses] = useState([]);
  const [ethnicGroup, setEthnicGroup] = useState(null);

  const [goToPage, setGoToPage] = useState(null);

  useEffect(() => {
    setGoToPage(location?.state?.orderNo);
  }, [location?.state?.orderNo]);

  return (
    <>
      <Header heading="Apply for support with West Midlands Cycle Hire costs" />
      <FormContentWrapper>
        <FormWizard
          onSubmit={() => {}}
          initialValues={location?.state?.formValues}
          goToPage={goToPage}
          setGoToPage={setGoToPage}
        >
          <Introduction />
          <EligibilityCheck />
          <RegistrationName />
          <DateOfBirth validate={validateDateOfBirth} />
          <RegistrationAddress
            orderNo={2}
            registrationAddresses={registrationAddresses}
            setRegistrationAddresses={setRegistrationAddresses}
            validate={addressIdPresent("formData")}
          />
          <EmailAddress />
          <DisabilityGroup />
          <EmploymentStatusGroup />
          <NewJobGroup />
          <BenefitsGroup />
          <ProofUpload />
          <MedicalServiceGroup />
          <WhereDropdown />

          <SurveyIntro />
          <Q1Survey />
          <Q2Survey />
          <Q3Survey />
          <Q4Survey />
          <Q5Survey validate={validateSelectOneOption("q7", "selectQ7")} />
          <Q6Survey />
          <Q7Survey validate={validateSelectOneOption("q16", "selectQ16")} />
          <Q8Survey />
          <Q9Survey />
          <Q10Survey />
          <EthnicGroup
            setEthnicGroup={setEthnicGroup}
            setGoToPage={setGoToPage}
          />
          {ethnicGroup !== "preferNotToSay" ? (
            <SpecificEthnicGroup />
          ) : undefined}

          <CheckAnswers
            setGoToPage={setGoToPage}
            validate={validateCheckAnswers}
          />
        </FormWizard>
      </FormContentWrapper>
    </>
  );
};

export default ApplicationForm;
