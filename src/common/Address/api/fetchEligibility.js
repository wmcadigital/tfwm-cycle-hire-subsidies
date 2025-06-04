const addressEndPointBase =
  process.env.REACT_APP_API_ENDPOINT_ELIGIBILITY;

const fetchEligibility = async (postCode) => {
  const postCodeTrimmed = postCode.trim();
  const eligibilityCheckEndPoint = `${addressEndPointBase}/${postCodeTrimmed}/false`;

  const response = await fetch(eligibilityCheckEndPoint);
  const parsedResponse = await response.json();

  return parsedResponse;
};

export default fetchEligibility;
