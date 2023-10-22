import { useEffect } from "react";
import Header from "../common/Header";
import BreadCrumb from "../common/BreadCrumb";
import ReactGa from "react-ga";

const SubmitSuccess = () => {
  const alignCenter = {
    textAlign: "center",
  };

  useEffect(() => {
    ReactGa.event({
      category: "cycle-hire-subsidies",
      action: "form submitted: success",
      label: "CycleHireSubsidies",
    })
  })

  return (
    <>
      <Header heading="Apply for support with West Midlands cycle and scooter hire costs" />
      <div className="wmnds-container">
        <BreadCrumb currentPageName="Apply for free cycle hire" />
        <div className="wmnds-grid">
          <div className=" wmnds-col-1 wmnds-col-md-2-3">
            <div className="wmnds-col-1 wmnds-m-b-xl">
              <div
                style={alignCenter}
                className="wmnds-msg-summary wmnds-msg-summary--success-fill "
              >
                <div className="wmnds-msg-summary__header">
                  <h3 className="wmnds-msg-summary__title">
                    We’ve received your form
                  </h3>
                </div>
              </div>
            </div>

            <div className="wmnds-col-1">
              <h2>What happens next</h2>
              <div className="wmnds-m-b-lg">
                <p>
                  Step 1: You’ll receive an email to confirm we have received
                  your application.
                </p>
                <p>
                  Step 2: You’ll receive an email within two working days,
                  Monday to Friday telling you your application has been
                  assessed and giving you an introduction to West Midlands Cycle
                  Hire.
                </p>
                <p>
                  If you haven’t received an e-mail, please check your spam
                  folder before contacting us.
                </p>
                <p>
                  If you haven’t received an e-mail, contact Customer Services:
                </p>
                <ul>
                  <li>
                    Email:{" "}
                    <a href="https://www.tfwm.org.uk/get-help/contact-us/">
                      Contact us
                    </a>
                  </li>
                  <li>Phone: 0345 303 6760</li>
                </ul>
                <p>Opening Times:</p>
                <ul>
                  <li>Mondays, Tuesdays, Thursdays and Fridays, 8am to 6pm</li>
                  <li>Wednesdays, 10am to 6pm</li>
                  <li>Saturdays, 9am to 1pm</li>
                  <li>Sundays and Bank Holidays, Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitSuccess;
