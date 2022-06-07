import PropTypes from "prop-types";

import BreadCrumb from "../common/BreadCrumb";

const FormContentWrapper = ({ children }) => (
  <>
    <BreadCrumb currentPageName="Apply for free cycle hire" />
    <main className="wmnds-container wmnds-container--main wmnds-p-b-lg wmnds-grid">
      <div className="wmnds-col-1 wmnds-col-md-2-3">{children}</div>
    </main>
  </>
);

FormContentWrapper.propTypes = {
  children: PropTypes.node,
};

export default FormContentWrapper;
