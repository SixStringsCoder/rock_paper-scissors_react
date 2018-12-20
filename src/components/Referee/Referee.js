import React from 'react';
import PropTypes from 'prop-types';
import './Referee.css';

// Callouts to say who wins or Tie
const Referee = ({ referee, isSpinning }) => {
    return (
      <div className="referee">
        <h3 className={ isSpinning ? "noReferee" : "callOutAnimation"}>
          {referee}
        </h3>
      </div>
    );
  }

Referee.propTypes = {
  referee: PropTypes.string.isRequired
}

export default Referee;
