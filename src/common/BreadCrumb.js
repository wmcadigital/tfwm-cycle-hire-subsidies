import PropTypes from "prop-types";

const BreadCrumb = ({ currentPageName }) => (
  <div className="wmnds-container">
    <nav aria-label="Main example breadcrumbs" className="wmnds-breadcrumb">
      <ol className="wmnds-breadcrumb__list">
        <li className="wmnds-breadcrumb__list-item">
          <a href="https://www.tfwm.org.uk/" className="wmnds-breadcrumb__link">
            Home
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/"
            className="wmnds-breadcrumb__link"
          >
            Plan your journey
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/ways-to-travel/"
            className="wmnds-breadcrumb__link"
          >
            Ways to travel
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/ways-to-travel/cycling-in-the-west-midlands/"
            className="wmnds-breadcrumb__link"
          >
            Cycling in the West Midlands
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/ways-to-travel/cycling-in-the-west-midlands/cycling-for-everyone/"
            className="wmnds-breadcrumb__link"
          >
            Cycling for Everyone
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/ways-to-travel/cycling-in-the-west-midlands/cycling-for-everyone/cycle-hire-apply-for-free-minutes/"
            className="wmnds-breadcrumb__link"
          >
            Cycle Hire - apply for free minutes
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="#"
            className="wmnds-breadcrumb__link wmnds-breadcrumb__link--current"
            aria-current="page"
          >
            {currentPageName}
          </a>
        </li>
      </ol>
    </nav>
  </div>
);

BreadCrumb.propTypes = {
  currentPageName: PropTypes.string,
};

export default BreadCrumb;
