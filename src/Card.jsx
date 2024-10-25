import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      {children}
    </div>
  );
};

// PropTypes validation
Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
