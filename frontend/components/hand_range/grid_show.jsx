import OpponentGrid from './OpponentGrid.jsx';
import HeroGrid from './HeroGrid.jsx';
import TableGrid from './TableGrid.jsx';
import React from 'react';
import Horizontal from './Slider.jsx'
// import * as Minesweeper from '../minesweeper';

class GridShow extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      opponentGrid: this.props.opponentGrid,
      heroGrid: this.props.heroGrid,
      tableGrid: this.props.tableGrid,
      numberOfPossibleHands: this.props.numberOfHands.numberOfHands,
      numberOfQuads: this.props.numberOfHands.numberOfQuads,
      numberOfFullHouses: this.props.numberOfHands.numberOfFullHouses,
      numberOfFlushes: this.props.numberOfHands.numberOfFlushes,
      numberOfStraights: this.props.numberOfHands.numberOfStraights,
      numberOfThreeOFAKinds: this.props.numberOfHands.numberOfThreeOFAKinds,
      numberOfTwoPairs: this.props.numberOfHands.numberOfTwoPairs,
      numberOfJustPair: this.props.numberOfHands.numberOfJustPair,
      numberOfOverPair: this.props.numberOfHands.numberOfOverPair,
      numberOfTopPair: this.props.numberOfHands.numberOfTopPair,
      numberOfPPBelowTp: this.props.numberOfHands.numberOfPPBelowTp,
      numberOfAceHigh: this.props.numberOfHands.numberOfAceHigh,
      numberOfNothing: this.props.numberOfHands.numberOfNothing,
      numberOfPossibleFlushDraw: this.props.numberOfHands.numberOfPossibleFlushDraw
    };
    this.updateOGrid = this.updateOGrid.bind(this);
    this.updateHGrid = this.updateHGrid.bind(this);
    this.updateTGrid = this.updateTGrid.bind(this);
    // this._updateSlider =this._updateSlider.bind(this);
  }

  updateOGrid(grid) {
    this.props.updateOpponentGrid(grid);
  }
  updateHGrid(grid) {
    this.props.updateHeroGrid(grid);
    this.props.updateNumberPossibleHands();
  }
  updateTGrid(grid) {
    this.props.updateTableGrid(grid);
    this.props.updateNumberPossibleHands();
  }

  //   this.state = {
  //     opponentGrid: this.props.opponentGrid,
  //     heroGrid: this.props.heroGrid,
  //     tableGrid: this.props.tableGrid,
  //     numberOfPossibleHands: this.props.numberOfHands.numberOfHands
  //   };
  // }

  render() {
    // let modal;
    // if (this.state.board.lost() || this.state.board.won()) {
      // const text = this.state.board.won() ? "You won!" : "You lost!";
      // modal =
      //   <div className='modal-screen'>
      //     <div className='modal-content'>
      //       <p>{text}</p>
      //       <button onClick={this.restartGrid}>Play Again</button>
      //     </div>
      //   </div>;
    // }
    this.state.numberOfPossibleHands = this.props.numberOfHands.numberOfHands;
    this.state.numberOfQuads = this.props.numberOfHands.numberOfQuads;
    this.state.numberOfFullHouses = this.props.numberOfHands.numberOfFullHouses;
    this.state.numberOfFlushes = this.props.numberOfHands.numberOfFlushes;
    this.state.numberOfStraights = this.props.numberOfHands.numberOfStraights;
    this.state.numberOfThreeOFAKinds = this.props.numberOfHands.numberOfThreeOFAKinds;
    this.state.numberOfTwoPairs = this.props.numberOfHands.numberOfTwoPairs;
    this.state.numberOfOverPair = this.props.numberOfHands.numberOfOverPair;
    this.state.numberOfTopPair = this.props.numberOfHands.numberOfTopPair;
    this.state.numberOfPPBelowTp = this.props.numberOfHands.numberOfPPBelowTp;
    this.state.numberOfAceHigh = this.props.numberOfHands.numberOfAceHigh;
    this.state.numberOfNothing = this.props.numberOfHands.numberOfNothing;
    this.state.numberOfPossibleFlushDraw = this.props.numberOfHands.numberOfPossibleFlushDraw;
    this.state.numberOfJustPair = this.props.numberOfHands.numberOfJustPair;

    return (
    <div>
      <div className="container">
        <OpponentGrid opponentGrid={this.state.opponentGrid} updateOGrid={this.updateOGrid} />
        <TableGrid tableGrid={this.state.tableGrid} updateTGrid={this.updateTGrid} />
        <HeroGrid heroGrid={this.state.heroGrid} updateHGrid={this.updateHGrid}/>
        <div>

          <ul className="stats">
            <li className ="stats-li">Quads { (Math.round((this.state.numberOfQuads / this.state.numberOfPossibleHands)*10000) /10000) } </li>
            <li className ="stats-li">Full House {  (Math.round((this.state.numberOfFullHouses  / this.state.numberOfPossibleHands)*10000) /10000) }</li>
            <li className ="stats-li">Flushes {  (Math.round((this.state.numberOfFlushes  / this.state.numberOfPossibleHands)*10000) /10000) }</li>
            <li className ="stats-li">Straights { (Math.round((this.state.numberOfStraights  / this.state.numberOfPossibleHands)*10000) /10000) }</li>
            <li className ="stats-li">Three of a kind { (Math.round((this.state.numberOfThreeOFAKinds  / this.state.numberOfPossibleHands)*10000) /10000 )}</li>
            <li className ="stats-li">Two pair { (Math.round((this.state.numberOfTwoPairs  / this.state.numberOfPossibleHands)*10000) /10000) }</li>
            <li className ="stats-li">A pair { (Math.round((this.state.numberOfJustPair  / this.state.numberOfPossibleHands)*10000) /10000 )}</li>
            <li className ="stats-li">Ace high { (Math.round((this.state.numberOfAceHigh  / this.state.numberOfPossibleHands)*10000) /10000) }</li>
            <li className ="stats-li">Nothing { (Math.round((this.state.numberOfNothing  / this.state.numberOfPossibleHands)*10000) /10000) }</li>
            <li className ="stats-li">Possbile flush draw { (Math.round((this.state.numberOfPossibleFlushDraw  / this.state.numberOfPossibleHands)*10000) /10000) }</li>
          </ul>
        </div>
      </div>
      <div className="slider">
        <Horizontal opponentGrid={this.state.opponentGrid} updateOGrid ={this.updateOGrid} />
      </div>
      <div>
        <h1>{this.state.numberOfPossibleHands}</h1>
      </div>
    </div>
    );
  }
}

export default GridShow;

{/* {modal} */}










{/* <li className ="stats-li">Over pair { (Math.round((this.state.numberOfOverPair  / this.state.numberOfPossibleHands)*10000) /10000 )}%</li>
<li className ="stats-li">Top pair { (Math.round((this.state.numberOfTopPair  / this.state.numberOfPossibleHands)*10000) /10000) }%</li>
<li className ="stats-li">PP below TP { (Math.round((this.state.numberOfPPBelowTp  / this.state.numberOfPossibleHands)*10000) /10000) }%</li> */}
