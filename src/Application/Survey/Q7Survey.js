import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import RadioGroup from "../../common/RadioGroup";
import RadioButton from "../../common/RadioButton";
import TextInput from "../../common/TextInput";
import Checkbox from "../../common/Checkbox";
import CheckboxContainer from "../../common/CheckboxContainer";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const Q7Survey = () => {
  const stateApi = useFormState();

  const Q16dropdownOptions = {
    work: "Work",
    education: "Education",
    familyBikeRides: "Family Bike Rides",
    leisureRecreation: "Leisure/recreation",
    cycleTraining: "Cycle Training",
    cycleClub: "Cycle Club",
  };

  const q12error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q12
      : null;

  const q15error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q15
      : null;

  const q16Error = stateApi.submitFailed ? stateApi.errors?.selectQ16 : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="LACF Survey"
      />
      <Question text="Safety and Confidence" />
      <p>Q12 - Currently, how safe do you feel walking in your local area?</p>
      <RadioGroup error={q12error}>
        <FieldError text={q12error} />
        <RadioButton
          key={1}
          label="Very safe"
          validation={required}
          value="Very safe"
          fieldName="formData.SurveyData.q12"
        />
        <RadioButton
          key={2}
          label="Safe"
          validation={required}
          value="Safe"
          fieldName="formData.SurveyData.q12"
        />
        <RadioButton
          key={3}
          label="Not very safe"
          validation={required}
          value="Not very safe"
          fieldName="formData.SurveyData.q12"
        />
        <RadioButton
          key={4}
          label="Not at all safe"
          validation={required}
          value="Not at all safe"
          fieldName="formData.SurveyData.q12"
        />
        <RadioButton
          key={5}
          label="Don't know/unsure"
          validation={required}
          value="Don't know/unsure"
          fieldName="formData.SurveyData.q12"
        />
      </RadioGroup>

      <TextInput
        fieldName="formData.SurveyData.q13"
        label="Q13 - What are the main reasons that you feel the way you said in Q12 about walking in your local area?"
      />

      <TextInput
        fieldName="formData.SurveyData.q14"
        label="Q14 - If you have any comments or suggestions on how your feeling of safety could be improved
        when walking in your local area please provide more detail below:"
      />

      <p>
        Q15 - And how confident do you feel about walking in your local area?
      </p>
      <RadioGroup error={q15error}>
        <FieldError text={q15error} />
        <RadioButton
          key={1}
          label="Very confident"
          validation={required}
          value="Very confident"
          fieldName="formData.SurveyData.q15"
        />
        <RadioButton
          key={2}
          label="Fairly confident"
          validation={required}
          value="Fairly confident"
          fieldName="formData.SurveyData.q15"
        />
        <RadioButton
          key={3}
          label="Not very confident"
          validation={required}
          value="Not very confident"
          fieldName="formData.SurveyData.q15"
        />
        <RadioButton
          key={4}
          label="Not at all confident"
          validation={required}
          value="Not at all confident"
          fieldName="formData.SurveyData.q15"
        />
        <RadioButton
          key={5}
          label="Don't know/unsure"
          validation={required}
          value="Don't know/unsure"
          fieldName="formData.SurveyData.q15"
        />
      </RadioGroup>
      <p>Q16 - How do you plan to use the cycle hire?</p>
      <CheckboxContainer error={q16Error}>
        <FieldError text={q16Error} />
        {Object.keys(Q16dropdownOptions).map((option) => (
          <Checkbox
            key={Q16dropdownOptions[option]}
            label={Q16dropdownOptions[option]}
            fieldName={`q16.${option}`}
          />
        ))}
      </CheckboxContainer>
    </FormSection>
  );
};

export default Q7Survey;
