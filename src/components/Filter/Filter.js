import PropTypes from 'prop-types';

const Filter = ({ value, handleInputChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={handleInputChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;
