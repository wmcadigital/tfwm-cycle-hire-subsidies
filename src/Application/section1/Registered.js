import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../common/Header";
import BreadCrumb from "../../common/BreadCrumb";
import Question from "../../common/Question";
import ButtonLink from "../../common/ButtonLink";

const Registered = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
            <h2>Email address already registered.</h2>
            <p>If you have lost your code, you do not need to start a new application. Plese refer to your original registration email.</p>
            <p>
            Alternatively, please visit <a href="https://www.wmcyclehire.co.uk/" target="_blank">West Midlands Cycle Hire</a> to get a pass and save money on cycle hire or <a href="https://beryl.cc/index.php/scheme/west-midlands-e-scooters" target="_blank">West Midlands e-scooter</a> to get a pass and save money on e-scooters in Birmingham.  
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registered;
