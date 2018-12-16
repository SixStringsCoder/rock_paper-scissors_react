import React from 'react';
import PropTypes from 'prop-types';
import './Referee.css';

// Callouts to say who wins or Tie
const Referee = ({ referee }) => {
    return (
      <div className="referee">
        <h3>{referee}</h3>
      </div>
    );
  }

Referee.propTypes = {
  referee: PropTypes.string.isRequired
}

export default Referee;
