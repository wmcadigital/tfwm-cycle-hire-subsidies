import { useEffect } from "react";
import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import RadioGroup from "../../common/RadioGroup";
import RadioButton from "../../common/RadioButton";
import TextInput from "../../common/TextInput";
import FieldError from "../../common/FieldError";
import { required } from "../../common/validation";

const Q8Survey = () => {
  const stateApi = useFormState();

  const q17error = stateApi.submitFailed ? stateApi.errors?.DisabilityQ : null;

  const q18error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q18
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
      <Question text="About You" />
      <p>
        Q17 - How many people, including yourself, currently live in your
        household?
      </p>
      <TextInput
        fieldName="formData.SurveyData.q17.Adults18OrOver"
        label="Adults aged 18 or over"
      />
      <TextInput
        fieldName="formData.SurveyData.q17.Children16Or17"
        label="Children aged 16 or 17"
      />
      <TextInput
        fieldName="formData.SurveyData.q17.Children12To15"
        label="Children aged 12 to 15"
      />
      <TextInput
        fieldName="formData.SurveyData.q17.Children5To11"
        label="Children aged 5 to 11"
      />
      <TextInput
        fieldName="formData.SurveyData.q17.Children4OrUnder"
        label="Children aged 4 or under"
      />

      <p>Q18 - What is your estimated household annual income?</p>
      <RadioGroup error={q18error}>
        <FieldError text={q18error} />
        <RadioButton
          key={2}
          label="Less than £10,000"
          validation={required}
          value="Less than £10,000"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={3}
          label="£10,000–£19,999"
          validation={required}
          value="£10,000–£19,999"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={4}
          label="£20,000–£29,999"
          validation={required}
          value="£20,000–£29,999"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={5}
          label="£30,000–£39,999"
          validation={required}
          value="£30,000–£39,999"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={6}
          label="£40,000–£49,999"
          validation={required}
          value="£40,000–£49,999"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={7}
          label="£50,000–£59,999"
          validation={required}
          value="£50,000–£59,999"
          fieldName="formData.SurveyData.q18"
        />{" "}
        <RadioButton
          key={8}
          label="£60,000–£74,999"
          validation={required}
          value="£60,000–£74,999"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={9}
          label="£75,000–£99,999"
          validation={required}
          value="£75,000–£99,999"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={10}
          label="£100,000 or more"
          validation={required}
          value="£100,000 or more"
          fieldName="formData.SurveyData.q18"
        />
        <RadioButton
          key={11}
          label="Prefer not to say"
          validation={required}
          value="Prefer not to say"
          fieldName="formData.SurveyData.q18"
        />
      </RadioGroup>
    </FormSection>
  );
};

export default Q8Survey;
