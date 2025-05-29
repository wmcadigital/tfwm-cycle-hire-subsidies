import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../common/Header";
import BreadCrumb from "../../common/BreadCrumb";
import Question from "../../common/Question";
import ButtonLink from "../../common/ButtonLink";

const Registered = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailAddress = location.state?.emailAddress; // Retrieve emailAddress from state
  const [apiResponse, setApiResponse] = useState(null);
  const [apiError, setApiError] = useState(false);

  const triggerManagementConsoleEmail = async () => {
    try {
      const payload = {
        email: emailAddress, // Use the email passed to this page
        applicationId: "sendit",
      };
      const response = await axios.post(
        "https://cyclehirelvslj7pmwltf4.azurewebsites.net/api/ManagementConsoleLink",
        payload
      );
      setApiResponse(response.data); // Store the API response
      setApiError(false); // Reset error state
      console.log("API call successful:", response.data);
    } catch (error) {
      console.error("Error during API call:", error);
      setApiError(true); // Set error state
    }
  };

  return (
    <>
      <Header heading="Apply for Go Cycle" />
      <BreadCrumb currentPageName="Apply for Go Cycle" />
      <main className="wmnds-container wmnds-container--main wmnds-p-b-lg wmnds-grid">
        <div className="wmnds-col-1 wmnds-col-md-2-3">
          <div className="wmnds-col-1 wmnds-m-b-md">
            <ButtonLink
              callback={() =>
                navigate("/", {
                  state: location.state,
                  replace: true,
                })
              }
            >
              {`< Back`}
            </ButtonLink>
          </div>
          <div className="wmnds-p-lg wmnds-bg-white">
            <p>Registration Checker</p>
            <h2>Email address already registered</h2>
            <p>
              If you have lost your code, you do not need to start a new
              application. Please refer to your original registration email.
            </p>
            <h3>Resend email confirmation</h3>
            <p>
              You can request another confirmation email containing your unique link, if you no longer have the original. 
            </p>
            <button
              className="wmnds-btn wmnds-btn--primary wmnds-m-b-md"
              type="button"
              onClick={triggerManagementConsoleEmail}
            >
              Resend confirmation email
            </button>
            {apiResponse && <div className="wmnds-msg-summary wmnds-msg-summary--success ">
            <div className="wmnds-msg-summary__header">
              <svg className="wmnds-msg-summary__icon">
                <use xlinkHref="#wmnds-general-success" href="#wmnds-general-success"></use>
              </svg>
              <h3 className="wmnds-msg-summary__title">Confirmation email sent</h3>
            </div>
          </div>}
            {apiError && (
              <div className="wmnds-msg-summary wmnds-msg-summary--error">
              <div className="wmnds-msg-summary__header">
                <svg className="wmnds-msg-summary__icon">
                  <use xlinkHref="#wmnds-general-warning-triangle" href="#wmnds-general-warning-triangle"></use>
                </svg>
                <h3 className="wmnds-msg-summary__title">Error sending confirmation</h3>
              </div>
              <div className="wmnds-msg-summary__info">
              There was an error sending the confimration email. Please try again later.
              </div>
            </div>
            )}
            <h2>Alternative services</h2>
            <p>
              If you are no longer eligible for this service, please visit{" "}
              <a
                href="https://www.wmcyclehire.co.uk/"
              >
                West Midlands Cycle Hire
              </a>{" "}
              to get a pass and save money on cycle hire, or{" "}
              <a
                href="https://beryl.cc/index.php/scheme/west-midlands-e-scooters"
              >
                West Midlands e-scooter
              </a>{" "}
              to get a pass and save money on e-scooters in Birmingham.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registered;
