import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './GameHand.css';
import Button from '../Button/Button';
import Referee from '../Referee/Referee';


const GameHand = ({isSpinning, yourHand, referee, computerHand}) => {
  return (
    <section className="gameHands">
        <div className={isSpinning ? "spinHand" : ""}>
          {yourHand}
        </div>

        <Referee referee={referee} />

        <div className={isSpinning ? "spinHand" : ""}>
          {computerHand}
        </div>
    </section>
  );
}

GameHand.propTypes = {
  computerHand: PropTypes.object.isRequired,
  yourHand: PropTypes.object.isRequired,
  referee: PropTypes.string.isRequired,
}

export default GameHand;
