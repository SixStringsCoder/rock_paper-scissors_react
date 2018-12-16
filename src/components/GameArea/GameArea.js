import React from 'react';
import PropTypes from 'prop-types';
import './GameArea.css';
import ScoreBar from '../ScoreBar/ScoreBar';
import ScoreNumber from '../ScoreNumber/ScoreNumber';
import GameHand from '../GameHand/GameHand';
import ButtonBar from '../ButtonBar/ButtonBar';

const GameArea = (props) => {
    const {computerScore,
            yourScore,
            yourHand,
            computerHand,
            theChoice,
            referee,
            playAgain,
            isSpinning} = props;

    return (
      <section className="GameArea">
          <ScoreBar />
          <ScoreNumber compScore={computerScore}
                    yourScore={yourScore}
                    />
          <GameHand theChoice={theChoice}
                    computerHand={computerHand}
                    yourHand={yourHand}
                    referee={referee}
                    isSpinning={isSpinning}
                    />
          <ButtonBar theChoice={theChoice}
                    playAgain={playAgain}
                    />
      </section>
    );
}

GameArea.propTypes = {
  computerScore: PropTypes.number.isRequired,
  yourScore: PropTypes.number.isRequired,
  theChoice: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired,
  computerHand: PropTypes.object.isRequired,
  yourHand: PropTypes.object.isRequired,
  referee: PropTypes.string.isRequired,
}

export default GameArea;
