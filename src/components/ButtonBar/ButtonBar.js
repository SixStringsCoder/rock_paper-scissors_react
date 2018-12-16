import React from 'react';
import PropTypes from 'prop-types';
import './ButtonBar.css';
import Button from '../Button/Button';

// 3 buttons to pick RPS and play again button
const ButtonBar = ({theChoice, playAgain}) => {
  return (
      <Button theChoice={theChoice}
              playAgain={playAgain}
              />
  );
}

ButtonBar.propTypes = {
  theChoice: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired
}

export default ButtonBar;
