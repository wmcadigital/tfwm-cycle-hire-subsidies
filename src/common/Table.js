import PropTypes from "prop-types";

const Table = ({ children }) => (
  <table className="wmnds-table wmnds-m-b-xl wmnds-table--without-header">
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
