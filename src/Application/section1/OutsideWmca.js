import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../common/Header";
import BreadCrumb from "../../common/BreadCrumb";
import Question from "../../common/Question";
import ButtonLink from "../../common/ButtonLink";

const OutsideWmca = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header heading="Apply for support with West Midlands cycle hire costs" />
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
            <p>Eligibility Checker</p>
            <Question text="Sorry, your postcode is not within our eligible area." />
            <p>
            You need to live in Birmingham, Coventry, Dudley, Sandwell, Solihull, Walsall or Wolverhampton to qualify.
            </p>
            <p>
            Please visit <a href="https://www.wmcyclehire.co.uk/" target="_blank">West Midlands Cycle Hire</a> to get a pass and save money on cycle hire or <a href="https://beryl.cc/index.php/scheme/west-midlands-e-scooters" target="_blank">West Midlands e-scooter</a> to get a pass and save money on e-scooters in Birmingham.  
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default OutsideWmca;
