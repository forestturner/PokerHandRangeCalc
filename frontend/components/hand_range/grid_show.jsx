import OpponentGrid from './OpponentGrid.jsx';
import HeroGrid from './HeroGrid.jsx';
import TableGrid from './TableGrid.jsx';
import React from 'react';
import Horizontal from './Slider.jsx';
import Chart from './chart.jsx';
import BarChart from './BarChart.jsx';
import {ProgressBar} from 'react-bootstrap';
// import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
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
      numberOfPossibleFlushDraw: this.props.numberOfHands.numberOfPossibleFlushDraw,
      deadCardsTable: this.props.numberOfHands.deadCardsTable
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
    // const data = [
    //       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    //       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    //       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    //       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    //       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    //       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    //       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    // ];



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
    let Quads = (Math.round((this.state.numberOfQuads / this.state.numberOfPossibleHands)*10000) /10000)
    let Full_House =  (Math.round((this.state.numberOfFullHouses  / this.state.numberOfPossibleHands)*10000) /10000)
    let Flushes =  (Math.round((this.state.numberOfFlushes  / this.state.numberOfPossibleHands)*10000) /10000)
    let Straights = (Math.round((this.state.numberOfStraights  / this.state.numberOfPossibleHands)*10000) /10000)
    let Three_of_a_kind = (Math.round((this.state.numberOfThreeOFAKinds  / this.state.numberOfPossibleHands)*10000) /10000 )
    let Two_pair = (Math.round((this.state.numberOfTwoPairs  / this.state.numberOfPossibleHands)*10000) /10000)
    let A_pair = (Math.round((this.state.numberOfJustPair  / this.state.numberOfPossibleHands)*10000) /10000 )
    let Ace_high = (Math.round((this.state.numberOfAceHigh  / this.state.numberOfPossibleHands)*10000) /10000)
    let Nothing = (Math.round((this.state.numberOfNothing  / this.state.numberOfPossibleHands)*10000) /10000)
    let Possbile_flush_draw = (Math.round((this.state.numberOfPossibleFlushDraw  / this.state.numberOfPossibleHands)*10000) /10000)
    console.log(Quads);
    console.log(Full_House);
    console.log(Flushes);
    console.log(Straights);
    console.log(Three_of_a_kind);
    console.log(Two_pair);
    console.log(A_pair);
    console.log(Ace_high);
    console.log(Nothing);
    console.log(Possbile_flush_draw);
    let Quads_active = false;
    let Full_House_active = false;
    let Flushes_active = false;
    let Straights_active = false;
    let Three_of_a_kind_active = false;
    let Two_pair_active = false;
    let A_pair_active = false;
    let Ace_high_active = false;
    let Nothing_active = false;
    let Possbile_flush_draw_active = false;


    if(Quads > 0){
      Quads_active = true;
    }
    if(Full_House > 0){
      Full_House_active = true;
    }
    if(Flushes > 0){
      Flushes_active = true;
    }
    if(Straights > 0){
      Straights_active = true;
    }
    if(Three_of_a_kind > 0){
      Three_of_a_kind_active = true;
    }
    if(Two_pair > 0){
      Two_pair_active = true;
    }
    if(A_pair > 0){
      A_pair_active =true;
    }
    if(Ace_high > 0){
      Ace_high_active = true;
    }
    if(Nothing > 0){
      Nothing_active = true;
    }
    if(Possbile_flush_draw > 0){
      Possbile_flush_draw_active = true;
    }




    return (
    <div>
      <div className="container">
        <OpponentGrid opponentGrid={this.state.opponentGrid} updateOGrid={this.updateOGrid} />
        <TableGrid tableGrid={this.state.tableGrid} updateTGrid={this.updateTGrid} />
        <HeroGrid heroGrid={this.state.heroGrid} updateHGrid={this.updateHGrid}/>
          <ul className="stats">
            <li className="stats-li"> Opponent's chances at these possible hands. </li>
            <li className="stats-li"> </li>
            <li className="stats-li"> Quads { Math.round((Math.round((this.state.numberOfQuads / this.state.numberOfPossibleHands)*10000) /10000)*100) }%  <ProgressBar active={Quads_active} now={ Math.round((Math.round((this.state.numberOfQuads / this.state.numberOfPossibleHands)*10000) /10000 )*100) } /> </li>
            <li className="stats-li"> Full House {  Math.round((Math.round((this.state.numberOfFullHouses  / this.state.numberOfPossibleHands)*10000) /10000)*100) }%  <ProgressBar active={Full_House_active} now={ Math.round((Math.round((this.state.numberOfFullHouses  / this.state.numberOfPossibleHands)*10000) /10000 )*100) } /> </li>
            <li className="stats-li"> Flushes {  Math.round((Math.round((this.state.numberOfFlushes  / this.state.numberOfPossibleHands)*10000) /10000)*100) }%  <ProgressBar active={Flushes_active} now={ Math.round((Math.round((this.state.numberOfFlushes / this.state.numberOfPossibleHands)*10000) /10000 )*100) } /> </li>
            <li className="stats-li"> Straights { Math.round((Math.round((this.state.numberOfStraights  / this.state.numberOfPossibleHands)*10000) /10000)*100) }%  <ProgressBar active={Straights_active} now={ Math.round((Math.round((this.state.numberOfStraights   / this.state.numberOfPossibleHands)*10000) /10000 )*100) } /> </li>
            <li className="stats-li"> Three of a kind {Math.round(( Math.round((this.state.numberOfThreeOFAKinds  / this.state.numberOfPossibleHands)*10000) /10000 )*100) }%  <ProgressBar active={Three_of_a_kind_active} now={ Math.round((Math.round((this.state.numberOfThreeOFAKinds  / this.state.numberOfPossibleHands)*10000) /10000 )*100) } /> </li>
            <li className="stats-li"> Two pair { Math.round((Math.round((this.state.numberOfTwoPairs  / this.state.numberOfPossibleHands)*10000) /10000)*100) }%   <ProgressBar active={Two_pair_active} now={ Math.round((Math.round((this.state.numberOfTwoPairs  / this.state.numberOfPossibleHands)*10000) /10000 )*100) } /> </li>
            <li className="stats-li"> A pair { Math.round((Math.round((this.state.numberOfJustPair  / this.state.numberOfPossibleHands)*10000) /10000 )*100) }% <ProgressBar active= {A_pair_active} now={ Math.round((Math.round((this.state.numberOfJustPair   / this.state.numberOfPossibleHands)*10000) /10000 )*100) } />      </li>
            <li className="stats-li"> Ace high { Math.round((Math.round((this.state.numberOfAceHigh  / this.state.numberOfPossibleHands)*10000) /10000)*100) }% <ProgressBar active={Ace_high_active} now={ Math.round((Math.round((this.state.numberOfAceHigh  / this.state.numberOfPossibleHands)*10000) /10000 )*100) } />   </li>
            <li className="stats-li"> Nothing { Math.round((Math.round((this.state.numberOfNothing  / this.state.numberOfPossibleHands)*10000) /10000)*100) }% <ProgressBar active={Nothing_active} now={ Math.round((Math.round((this.state.numberOfNothing / this.state.numberOfPossibleHands)*10000) /10000 )*100) } />  </li>
            <li className="stats-li"> Possbile flush draw { Math.round((Math.round((this.state.numberOfPossibleFlushDraw  / this.state.numberOfPossibleHands)*10000) /10000)*100) }% <ProgressBar active={Possbile_flush_draw_active} now={ Math.round((Math.round((this.state.numberOfPossibleFlushDraw  / this.state.numberOfPossibleHands)*10000) /10000 )*100) } />  </li>
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

{/* {modal} */}


{/* <Chart deadCardsTable={this.state.deadCardsTable} Quads={Quads} Full_House={Full_House} Flushes={Flushes} Straights={Straights} Three_of_a_kind={Three_of_a_kind} Two_pair={Two_pair} A_pair={A_pair} Ace_high={Ace_high} Nothing={Nothing}  Possbile_flush_draw= {Possbile_flush_draw} /> */}








{/* <li className ="stats-li">Over pair { (Math.round((this.state.numberOfOverPair  / this.state.numberOfPossibleHands)*10000) /10000 )}%</li>
<li className ="stats-li">Top pair { (Math.round((this.state.numberOfTopPair  / this.state.numberOfPossibleHands)*10000) /10000) }%</li>
<li className ="stats-li">PP below TP { (Math.round((this.state.numberOfPPBelowTp  / this.state.numberOfPossibleHands)*10000) /10000) }%</li> */}






{/* <BarChart deadCardsTable={this.state.deadCardsTable} Quads={Math.round(Quads)} Full_House={Math.round(Full_House)} Flushes={Math.round(Flushes)} Straights={Math.round(Straights)} Three_of_a_kind={Math.round(Three_of_a_kind)} Two_pair={Math.round(Two_pair)} A_pair={Math.round(A_pair)}
Ace_high={Math.round(Ace_high)} Nothing={Math.round(Nothing)}  Possbile_flush_draw= {Math.round(Possbile_flush_draw)} /> */}
