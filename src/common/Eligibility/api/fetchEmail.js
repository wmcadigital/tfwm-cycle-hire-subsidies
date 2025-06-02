const api =
  `${process.env.REACT_APP_API_ENDPOINT_MANAGE}/api/ManagementConsoleLink`;

const fetchEmail = async (applicationId, email ) => {
  console.log("fetchEmail called with:", { applicationId, email });
  const eligibilityCheckEndPoint = `${api}`;

  // Build body
  const xmlBody = `
  {
    email: "${email}",
    applicationId: "${applicationId}"
  }
  `.trim();

  const response = await fetch(eligibilityCheckEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/xml",
      Accept: "*/*",
    },
    body: xmlBody,
  });
  const parsedResponse = await response;

  return parsedResponse;
};

export default fetchEmail;
