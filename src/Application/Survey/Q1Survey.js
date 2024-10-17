import { useFormState } from "react-final-form";

import FormSection from "../../common/FormSection";
import ProgressIndicator from "../../common/ProgressIndicator";
import Question from "../../common/Question";
import Dropdown from "../../common/Dropdown";
import { required } from "../../common/validation";

const dropdownOptions = [
  { value: "5 or more days a week", label: "5 or more days a week" },
  { value: "3 or 4 days a week", label: "3 or 4 days a week" },
  { value: "1 or 2 days a week", label: "1 or 2 days a week" },
  { value: "Once or twice a month", label: "Once or twice a month" },
  { value: "Less than once a month", label: "Less than once a month" },
  { value: "Never", label: "Never" },
];

const Q1Survey = () => {
  const stateApi = useFormState();

  const error =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.CarOrVanAsDriver
      : null;
  const error1 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.CarOrVanAsPassenger
      : null;
  const error2 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.BusMinibusOrCoach
      : null;
  const error3 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.MetroTram
      : null;
  const error4 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.Train
      : null;
  const error5 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.TaxiOrMinicab
      : null;
  const error6 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.MotorcycleScooterEscooterOrMoped
      : null;
  const error7 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.BicycleEbikeEcycleOrAdaptedCycle
      : null;
  const error8 =
    stateApi.submitFailed && stateApi.hasValidationErrors
      ? stateApi.errors?.formData.SurveyData.q1.WalkFor10Minutes
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <FormSection>
      <ProgressIndicator
        sectionPosition="Section 2 of 2"
        sectionName="Survey"
      />
      <Question text="Your current travel" isRequired={true} />
      <p>
        Q1 - Firstly, we’d like to know a little more about how you currently
        travel. On average, how often would you say that you currently travel
        using each of the following:
      </p>

      <Dropdown
        fieldName="formData.SurveyData.q1.CarOrVanAsDriver"
        error={error}
        label="Car or van (as the driver)"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.CarOrVanAsPassenger"
        error={error1}
        label="Car or van (as passenger)"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.BusMinibusOrCoach"
        error={error2}
        label="Bus, minibus, or coach"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.MetroTram"
        error={error3}
        label="Midland Metro/tram"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.Train"
        error={error4}
        label="Train"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.TaxiOrMinicab"
        error={error5}
        label="Taxi or minicab"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.MotorcycleScooterEscooterOrMoped"
        error={error6}
        label="Motorcycle, scooter, e-scooter or moped"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.BicycleEbikeEcycleOrAdaptedCycle"
        error={error7}
        label="Bicycle, e-bike/e-cycle, adapted cycle"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
      <Dropdown
        fieldName="formData.SurveyData.q1.WalkFor10Minutes"
        error={error8}
        label="Walk for at least 10 minutes as part of your journey"
        options={dropdownOptions}
        validation={required}
        isRequired={true}
      />
    </FormSection>
  );
};

export default Q1Survey;
