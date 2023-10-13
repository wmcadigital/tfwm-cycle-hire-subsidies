import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import Dropdown from "../../common/Dropdown";
import TextInput from "../../common/TextInput";
import { required } from "../../common/validation";

const dropdownOptions = [
  { value: "5 or more days a week", label: "5 or more days a week" },
  { value: "3 or 4 days a week", label: "3 or 4 days a week" },
  { value: "1 or 2 days a week", label: "1 or 2 days a week" },
  { value: "Once or twice a month", label: "Once or twice a month" },
  { value: "Less than once a month", label: "Less than once a month" },
  { value: "Never", label: "Never" },
];

const Q4Survey = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.PlaceOfWork
      : null;
  const error1 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.PlaceOfEducation
      : null;
  const error2 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.PersonalBusiness
      : null;
  const error3 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.FriendsOrFamily
      : null;
  const error4 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.FoodOrGroceryShopping
      : null;
  const error5 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.OtherShopping
      : null;
  const error6 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.SocialTravel
      : null;
  const error7 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.ExerciseOrRecreation
      : null;
  const error8 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q3.OtherReasons
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <Question text="Your current travel" isRequired={true} />
      <p>
        Q3 - On average, how often would you say you walk for at least 10
        minutes as part of your journey, for each of the following reasons:
      </p>

      <Dropdown
        fieldName="formData.SurveyData.q3.PlaceOfWork"
        error={error}
        label="To go to/from your place of work"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.PlaceOfEducation"
        error={error1}
        label="To go to/from your place of education (e.g. school, college, or university)"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.PersonalBusiness"
        error={error2}
        label="To go somewhere for personal business (e.g. travelling to an appointment)"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.FriendsOrFamily"
        error={error3}
        label="To visit friends or family"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.FoodOrGroceryShopping"
        error={error4}
        label="To go food or grocery shopping"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.OtherShopping"
        error={error5}
        label="To go shopping for things other than food"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.SocialTravel"
        error={error6}
        label="To go somewhere for leisure/social reasons (e.g. to entertainment, to play sport or to visit a pub or restaurant)"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.ExerciseOrRecreation"
        error={error7}
        label="To do exercise or for recreation"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q3.OtherReasons"
        error={error8}
        label="For other reasons"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <TextInput
        fieldName="formData.SurveyData.q3.SpecifyOtherReasons"
        label="For other reasons (please specify)"
      />
    </FormSection>
  );
};

export default Q4Survey;
