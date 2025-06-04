import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormState } from "react-final-form";
import Header from "../../common/Header";
import BreadCrumb from "../../common/BreadCrumb";
import ButtonLink from "../../common/ButtonLink";
import axios from "axios";

const Registered = () => {
  const stateApi = useFormState();
  const formValues = stateApi.values;
  const location = useLocation();
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");

  const sendEmail = async () => {
    const email = formValues?.formData?.EmailAddress;
    if (email) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT_MANAGE}/api/ManagementConsoleLink`,
          {
            email: emailAddress,
            applicationId: "sendit",
          }
        );
        // setButtonClicked(true);
        if (response.status === 200) {
          // setUserExists(true);
          // navigate("/registered");
          console.log("Email sent successfully");
        } else {
          // setUserExists(false);
          // setEmailAddress(email);
        }
        // setErrorCheckingEmail(false);
      } catch (error) {
        // setUserExists(false);
        // setEmailAddress(email);
        // formApi.mutators.setFormAttribute("formData.emailAddressHidden", email);
        // setErrorCheckingEmail(true);
        console.error("Error sending email:", error);
      }
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
            <h2>Email address already registered.</h2>
            <p>
              If you have lost your code, you do not need to start a new
              application. Please refer to your original registration email.
            </p>
            <button
              className="wmnds-btn wmnds-btn--primary"
              type="button"
              onClick={() => sendEmail()}
            >
              Check email
            </button>
            {/* <p>
              Alternatively, please visit{" "}
              <a
                href="https://www.wmcyclehire.co.uk/"
                rel="noreferrer"
                target="_blank"
              >
                West Midlands Cycle Hire
              </a>{" "}
              to get a pass and save money on cycle hire or{" "}
              <a
                href="https://beryl.cc/index.php/scheme/west-midlands-e-scooters"
                rel="noreferrer"
                target="_blank"
              >
                West Midlands e-scooter
              </a>{" "}
              to get a pass and save money on e-scooters in Birmingham.
            </p> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Registered;
