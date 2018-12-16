import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import '../GameHand/GameHand.css';
import rock from '../GameHand/images/rock.png';
import paper from '../GameHand/images/paper.png';
import scissors from '../GameHand/images/scissors.png';

class Button extends React.Component {

  // This method sets state to index positions, 0 to 2, for handChoices array in App.js
  clickEventHandler = (event) => {
    event.preventDefault();
    let indexNumber = Number(event.target.id);
    this.props.theChoice(indexNumber);
  }

  render() {
    const { playAgain } = this.props;
    return (
      <section className="buttonsArea">
        <div className="btnImageBorder">
          <a onClick={this.clickEventHandler}><img className="btnImage" id="0" src={rock} /></a>
        </div>
        <div className="btnImageBorder">
          <a onClick={this.clickEventHandler}><img className="btnImage" id="1" src={paper} /></a>
        </div>
        <div className="btnImageBorder">
          <a onClick={this.clickEventHandler}><img className="btnImage" id="2" src={scissors} /></a>
        </div>
        <div className="playAgainDiv">
          <button className="btnPlayAgain" onClick={playAgain}>PLAY AGAIN</button>
        </div>
      </section>
    );
  }
}

Button.propTypes = {
  playAgain: PropTypes.func.isRequired,
  theChoice: PropTypes.func.isRequired,
}

export default Button;
