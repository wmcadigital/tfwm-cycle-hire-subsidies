import PropTypes from "prop-types";

const Question = ({ text, isRequired }) => (
  <>
    {isRequired && <p className="wmnds-m-t-sm">Fields marked with an asterisk (*) are required.</p>}
    <h2 className="wmnds-fe-question">{text}</h2>
  </>
);

Question.propTypes = {
  text: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

export default Question;
