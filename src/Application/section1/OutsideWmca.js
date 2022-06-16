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
      <Header heading="Apply for support with West Midlands Cycle Hire costs" />
      <BreadCrumb currentPageName="Apply for free cycle hire" />
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
              To be eligible for this service, you must live in an IMD ward 1 or
              2 in the West Midlands Combined Authority area.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default OutsideWmca;
