const addressEndPointBase =
  "https://cyclewise-dev-api.azure-api.net/cyclewise/area-eligibility-check/";

const fetchEligibility = async (postCode) => {
  const postCodeTrimmed = postCode.trim();
  const eligibilityCheckEndPoint = `${addressEndPointBase}${postCodeTrimmed}/false`;

  const response = await fetch(eligibilityCheckEndPoint);
  const parsedResponse = await response.json();

  return parsedResponse;
};

export default fetchEligibility;
