import PropTypes from "prop-types";

const Question = ({ text, isRequired }) => (
  <>
    <h2 className="wmnds-fe-question">{text}</h2>
    {isRequired && <p>Fields marked with an asterisk (*) are required.</p>}
  </>
);

Question.propTypes = {
  text: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

export default Question;
