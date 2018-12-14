import OpponentGrid from './OpponentGrid.jsx';
import HeroGrid from './HeroGrid.jsx';
import TableGrid from './TableGrid.jsx';
import React from 'react';
import Horizontal from './Slider.jsx';
import Chart from './chart.jsx';
import BarChart from './BarChart.jsx';
import {ProgressBar} from 'react-bootstrap';

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
      numberOfPossibleFlushDraw: this.props.numberOfHands.numberOfPossibleFlushDraw,
      deadCardsTable: this.props.numberOfHands.deadCardsTable
    };
    this.updateOGrid = this.updateOGrid.bind(this);
    this.updateHGrid = this.updateHGrid.bind(this);
    this.updateTGrid = this.updateTGrid.bind(this);
    this.calcOdds = this.calcOdds.bind(this);
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
  componentDidUpdate(){
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
    this.state.deadCardsTable = this.props.numberOfHands.deadCardsTable;
  }

  calcOdds(possibleCards) {
    let percent = Math.round((Math.round((possibleCards / this.state.numberOfPossibleHands)*10000) /10000) * 100)
    if (percent >= 100) {
      return 100.00
    } else {
      return percent
    }
  }

  render() {
    if(this.props.numberOfHands.numberOfHands){
      this.state.numberOfPossibleHands = this.props.numberOfHands.numberOfHands;
    } else{
      this.state.numberOfPossibleHands = 1;
    }
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
    this.state.deadCardsTable = this.props.deadCardsTable;

    let Quads = this.calcOdds(this.state.numberOfQuads)
    let Full_House =  this.calcOdds(this.state.numberOfFullHouses)
    let Flushes =  this.calcOdds(this.state.numberOfFlushes)
    let Straights = this.calcOdds(this.state.numberOfStraights) 
    let Three_of_a_kind = this.calcOdds(this.state.numberOfThreeOFAKinds)  
    let Two_pair = this.calcOdds(this.state.numberOfTwoPairs)
    let A_pair = this.calcOdds(this.state.numberOfJustPair)
    let Ace_high = this.calcOdds(this.state.numberOfAceHigh)
    let Nothing = this.calcOdds(this.state.numberOfNothing)
    let Possbile_flush_draw = this.calcOdds(this.state.numberOfPossibleFlushDraw)
    
    let Quads_active = Quads > 0
    let Full_House_active = Full_House > 0
    let Flushes_active = Flushes > 0
    let Straights_active = Straights > 0
    let Three_of_a_kind_active = Three_of_a_kind > 0
    let Two_pair_active = Two_pair > 0
    let A_pair_active = A_pair > 0
    let Ace_high_active = Ace_high > 0
    let Nothing_active = Nothing > 0
    let Possbile_flush_draw_active = Possbile_flush_draw > 0

    return (
    <div>
      <div className="container">
        <OpponentGrid opponentGrid={this.state.opponentGrid} updateOGrid={this.updateOGrid} />
        <TableGrid tableGrid={this.state.tableGrid} updateTGrid={this.updateTGrid} />
        <HeroGrid heroGrid={this.state.heroGrid} updateHGrid={this.updateHGrid}/>
          <ul className="stats">
            <li className="stats-li"> Opponent's chances at these possible hands. </li>
            <li className="stats-li"> </li>
            <li className="stats-li"> Quads { Quads }%  <ProgressBar active={Quads_active} now={ Quads  } /> </li>
            <li className="stats-li"> Full House { Full_House }%  <ProgressBar active={Full_House_active} now={ Full_House } /> </li>
            <li className="stats-li"> Flushes { Flushes  }%  <ProgressBar active={Flushes_active} now={ Flushes } /> </li>
            <li className="stats-li"> Straights { Straights }%  <ProgressBar active={Straights_active} now={ Straights } /> </li>
            <li className="stats-li"> Three of a kind { Three_of_a_kind }%  <ProgressBar active={Three_of_a_kind_active} now={ Three_of_a_kind } /> </li>
            <li className="stats-li"> Two pair { Two_pair }%   <ProgressBar active={Two_pair_active} now={ Two_pair } /> </li>
            <li className="stats-li"> A pair { A_pair }% <ProgressBar active= {A_pair_active} now={ A_pair } />      </li>
            <li className="stats-li"> Ace high { Ace_high }% <ProgressBar active={Ace_high_active} now={  Ace_high } />   </li>
            <li className="stats-li"> Nothing { Nothing }% <ProgressBar active={Nothing_active} now={ Nothing } />  </li>
            <li className="stats-li"> Possbile flush draw { Possbile_flush_draw  }% <ProgressBar active={Possbile_flush_draw_active} now={ Possbile_flush_draw } />  </li>
          </ul>
        <div className="slider">
        <Horizontal opponentGrid={this.state.opponentGrid} updateOGrid ={this.updateOGrid} />
        </div>
      </div>
      <div>
        <h1>{this.state.numberOfPossibleHands}</h1>
      </div>
    </div>
    );
  }
}

export default GridShow;