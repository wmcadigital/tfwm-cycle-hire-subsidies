import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";

const SurveyIntro = () => {
  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <h2>LACF Activity Baseline</h2>
      <p>
        Thank you for choosing to participate in Cycling for Everyone - Cycle
        Hire. Before you participate in the cycle hire scheme Transport for West
        Midlands would like to ask you some questions about your current travel
        and the journeys that you typically make. This information will be
        extremely useful in helping us to understand the impact of Cycling for
        Everyone - Cycle Hire on those who have taken part.
      </p>
      <p>
        These questions should take you no more than 5-10 minutes to fill in.
        All completed entries will be eligible for entry into a prize draw with
        the chance to win one prize of £50 in Amazon Vouchers. The closing date
        for entries is the last day of the month of your applied.
      </p>
    </FormSection>
  );
};

export default SurveyIntro;
