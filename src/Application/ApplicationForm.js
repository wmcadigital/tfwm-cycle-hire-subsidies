import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Layout
import FormContentWrapper from "../common/FormContentWrapper";
import Header from "../common/Header";
import FormWizard from "../common/FormWizard";

// Main form
import EligibilityCheck from "./section1/EligibilityCheck";
import RegistrationName from "./section1/RegistrationName";
import DateOfBirth from "./section1/DateOfBirth";
import EmailAddress from "./section1/EmailAddress";
import RegistrationAddress from "./section1/RegistrationAddress";
// import DisabilityGroup from "./section1/DisabilityGroup";
import EmploymentStatusGroup from "./section1/EmploymentStatusGroup";
// import NewJobGroup from "./section1/NewJobGroup";
import BenefitsGroup from "./section1/BenefitsGroup";
import ProofUpload from "./section1/ProofUpload";
// import MedicalServiceGroup from "./section1/MedicalServiceGroup";
import WhereDropdown from "./section1/WhereDropdown";

// Survey
import SurveyIntro from "./Survey/SuveyIntro";
import Q1Survey from "./Survey/Q1Survey";
import Q2Survey from "./Survey/Q2Survey";
import Q3Q4Survey from "./Survey/Q3Q4Survey";
import Q5Q6Survey from "./Survey/Q5Q6Survey";
import Q7Q8Q9Q10Survey from "./Survey/Q7Q8Q9Q10Survey";
import Q8Survey from "./Survey/Q8Survey";
import Q9Survey from "./Survey/Q9Survey";
import Q11Q12Survey from "./Survey/Q11Q12Survey";
import Q13Survey from "./Survey/Q13Survey";
import EthnicGroup from "./Survey/EthnicGroup";
import SpecificEthnicGroup from "./Survey/SpecificEthnicGroup";

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
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    setGoToPage(location?.state?.orderNo);

    // check if url params has nosurvey
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('nosurvey')) {
      setShowSurvey(true);
    }
  }, [location?.state?.orderNo]);

  return (
    <>
      <Header heading="Apply for Go Cycle" />
      <FormContentWrapper>
        <FormWizard
          onSubmit={() => {}}
          initialValues={location?.state?.formValues}
          goToPage={goToPage}
          setGoToPage={setGoToPage}
        >
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
          {/* <DisabilityGroup /> */}
          {/* <NewJobGroup /> */}
          <BenefitsGroup />
          <ProofUpload />
          {/* <MedicalServiceGroup /> */}
          {!showSurvey && <SurveyIntro />}
          {!showSurvey && <Q1Survey />}
          {!showSurvey && <Q2Survey />}
          {!showSurvey && <Q3Q4Survey />}
          {!showSurvey && <Q5Q6Survey />}
          {!showSurvey && <Q7Q8Q9Q10Survey />}
          {!showSurvey && <WhereDropdown />}
          {!showSurvey && <Q11Q12Survey />}
          {!showSurvey && <Q13Survey />}
          {!showSurvey && <EthnicGroup
            setEthnicGroup={setEthnicGroup}
            setGoToPage={setGoToPage}
          />}
          {!showSurvey && ethnicGroup !== "preferNotToSay" ? (
            <SpecificEthnicGroup />
          ) : undefined}
          {!showSurvey && <Q9Survey />}
          {!showSurvey && <EmploymentStatusGroup />}
          {!showSurvey && <Q8Survey />}
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
