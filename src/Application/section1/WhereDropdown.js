import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import Dropdown from "../../common/Dropdown";
import { required } from "../../common/validation";

const whereOptions = [
  { value: "TfWM Website", label: "TfWM Website" },
  { value: "Leaflet", label: "Leaflet" },
  { value: "Posters", label: "Posters" },
  { value: "Event", label: "Event" },
  { value: "Employer", label: "Employer" },
  { value: "Social Prescribing", label: "Social Prescribing" },
  { value: "Social Media", label: "Social Media" },
  { value: "Jobcentre", label: "Jobcentre" },
  { value: "Community Centre", label: "Community Centre" },
  { value: "Word of mouth", label: "Word of mouth" },
  {
    value: "West Midlands Cycle Hire web page",
    label: "West Midlands Cycle Hire web page",
  },
  {
    value: "Cycling for Everyone activity",
    label: "Cycling for Everyone activity",
  },
  { value: "News", label: "News" },
  { value: "Other", label: "Other" },
];

const WhereDropdown = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.WhereDidYouHearAboutTheScheme
      : null;

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 1 of 2"
        sectionName="About you"
      />
      <Question text="Where did you hear about this scheme?" />
      <Dropdown
        fieldName="formData.WhereDidYouHearAboutTheScheme"
        error={error}
        label="Select one option"
        options={whereOptions}
        validation={required}
      />
    </FormSection>
  );
};

export default WhereDropdown;
