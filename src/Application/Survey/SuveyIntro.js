import { useEffect } from "react";
import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";

const SurveyIntro = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="Survey"
      />
      <h2>Cycling for Everyone activity survey.</h2>
      <p>
        Thank you for choosing to participate in Cycling for Everyone. Before you participate in the scheme, Transport
        for West Midlands would like to ask you some questions about your
        current travel and the journeys that you typically make.
      </p>
      <p>
        This information will be extremely useful in helping us to understand
        the impact of Cycling for Everyone on those who have
        taken part.
      </p>
      <p>
        It should take you no more than 5 minutes to fill in. All completed
        entries will be eligible for entry into a prize draw with the chance to{" "}
        <b>win one prize of £50 in Amazon Vouchers</b>. The closing date for
        entries is the last day of the month you applied.
      </p>
      <p>
        If you decide not to take part in this survey, please close the window
        before submitting. This will cancel your application for Cycling for
        Everyone.
      </p>
      <h3>Consent</h3>
      <p>
        We want to ensure that we talk to as many different types of people as
        possible and therefore would like to ask some questions about you, your
        travel patterns and lifestyle. Transport for West Midlands (TfWM); part
        of the West Midland Combined Authority (WMCA) is responsible for any
        information that you provide us. We ensure that this information will be
        processed in accordance with data protection legislation.
      </p>
      <p>
        We are committed to protecting your privacy and will use your personal
        information fairly. The personal data that we will collect about you as
        part of this study are: Age, Email, telephone number, Postcode, Ethnic
        Background and Disability. We will safely store your personal data for a
        maximum of 18 months. For further information on how we handle
        information/data, and your information rights, visit our{" "}
        <a
          className="wmnds-link"
          href="https://tfwm.org.uk/policies/privacy-and-cookies-policy"
          target="_blank"
        >
        privacy policy
        </a>
        .
      </p>
      <p>
        By choosing to continue with this survey, you are giving your informed
        consent to take part in our research. You understand that you may remove
        yourself from the study by closing the window before submitting. If you
        wish to discuss this questionnaire in further detail or you want
        information on how your data will be collected, stored and used, please
        email: transportresearch@tfwm.org.uk.
      </p>
    </FormSection>
  );
};

export default SurveyIntro;
