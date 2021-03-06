import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";

const SurveyIntro = () => {
  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <h2>Cycling for Everyone Cycle Hire activity survey.</h2>
      <p>
        Thank you for choosing to participate in Cycling for Everyone - Cycle
        Hire. Before you participate in the cycle hire scheme, Transport for
        West Midlands would like to ask you some questions about your current
        travel and the journeys that you typically make.
      </p>
      <p>
        This information will be extremely useful in helping us to understand
        the impact of Cycling for Everyone - Cycle Hire on those who have taken
        part.
      </p>
      <p>
        It should take you no more than 5 minutes to fill in. All completed
        entries will be eligible for entry into a prize draw with the chance to{" "}
        <b>win one prize of £50 in Amazon Vouchers</b>. The closing date for
        entries is the last day of the month you applied.
      </p>
    </FormSection>
  );
};

export default SurveyIntro;
