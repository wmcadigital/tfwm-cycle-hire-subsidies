import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import RadioGroup from "../../common/RadioGroup";
import RadioButton from "../../common/RadioButton";
import Dropdown from "../../common/Dropdown";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const Q9Survey = () => {
  const stateApi = useFormState();

  const q19error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q19
      : null;

  const q20error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q20
      : null;

  const q21error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q21
      : null;

  const q22error1 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q22.GoOutOnFootUnaided
      : null;

  const q22error2 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q22.RideABicycle
      : null;

  const q22error3 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q22.TravelOnLocalBusesTrainsTrams
      : null;

  const q22error4 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q22.GetInOrOutOfACar
      : null;

  const dropdownOptions = [
    { value: "Yes, always", label: "Yes, always" },
    { value: "Yes, sometimes", label: "Yes, sometimes" },
    { value: "No", label: "No" },
    { value: "Prefer not to say", label: "Prefer not to say" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <Question text="About You" />
      <p>Q19 - How is your health in general?</p>
      <RadioGroup error={q19error}>
        <FieldError text={q19error} />
        <RadioButton
          key={1}
          label="Very good"
          validation={required}
          value="Very good"
          fieldName="formData.SurveyData.q19"
        />
        <RadioButton
          key={2}
          label="Good"
          validation={required}
          value="Good"
          fieldName="formData.SurveyData.q19"
        />
        <RadioButton
          key={3}
          label="Fair"
          validation={required}
          value="Fair"
          fieldName="formData.SurveyData.q19"
        />
        <RadioButton
          key={4}
          label="Bad"
          validation={required}
          value="Bad"
          fieldName="formData.SurveyData.q19"
        />
        <RadioButton
          key={5}
          label="Very bad"
          validation={required}
          value="Very bad"
          fieldName="formData.SurveyData.q19"
        />
        <RadioButton
          key={6}
          label="Don’t know/unsure"
          validation={required}
          value="Don’t know/unsure"
          fieldName="formData.SurveyData.q19"
        />
        <RadioButton
          key={7}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="formData.SurveyData.q19"
        />
      </RadioGroup>

      <p>
        Q20 - Do you have any physical or mental health conditions or illnesses
        lasting or expected to last 12 months or more?
      </p>
      <RadioGroup error={q20error}>
        <FieldError text={q20error} />
        <RadioButton
          key={1}
          label="Yes"
          validation={required}
          value="Yes"
          fieldName="formData.SurveyData.q20"
        />
        <RadioButton
          key={2}
          label="No"
          validation={required}
          value="No"
          fieldName="formData.SurveyData.q20"
        />
        <RadioButton
          key={3}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="formData.SurveyData.q20"
        />
      </RadioGroup>

      <p>
        Q21 - Does the condition or illness you mentioned in Q20 reduce your
        ability to carry out day-to-day activities?
      </p>
      <RadioGroup error={q21error}>
        <FieldError text={q21error} />
        <RadioButton
          key={1}
          label="Yes, a lot"
          validation={required}
          value="Yes, a lot"
          fieldName="formData.SurveyData.q21"
        />
        <RadioButton
          key={2}
          label="Yes, a little"
          validation={required}
          value="Yes, a little"
          fieldName="formData.SurveyData.q21"
        />
        <RadioButton
          key={3}
          label="Not at all"
          validation={required}
          value="Not at all"
          fieldName="formData.SurveyData.q21"
        />
        <RadioButton
          key={4}
          label="Not applicable"
          validation={required}
          value="Not applicable"
          fieldName="formData.SurveyData.q21"
        />
      </RadioGroup>

      <p>
        Q22 - Does the condition or illness you mentioned in Q20 typically
        impact your ability to do any of the following activities?
      </p>
      <Dropdown
        fieldName="formData.SurveyData.q22.GoOutOnFootUnaided"
        error={q22error1}
        label="Go out on foot unaided"
        options={dropdownOptions}
        validation={required}
      />
      <Dropdown
        fieldName="formData.SurveyData.q22.RideABicycle"
        error={q22error2}
        label="Ride a bicycle"
        options={dropdownOptions}
        validation={required}
      />
      <Dropdown
        fieldName="formData.SurveyData.q22.TravelOnLocalBusesTrainsTrams"
        error={q22error3}
        label="Travel on local buses/trains/trams"
        options={dropdownOptions}
        validation={required}
      />
      <Dropdown
        fieldName="formData.SurveyData.q22.GetInOrOutOfACar"
        error={q22error4}
        label="Get in or out of a car"
        options={dropdownOptions}
        validation={required}
      />
    </FormSection>
  );
};

export default Q9Survey;
