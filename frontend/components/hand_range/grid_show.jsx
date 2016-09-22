import OpponentGrid from './OpponentGrid.jsx';
import React from 'react';
// import * as Minesweeper from '../minesweeper';

class GridShow extends React.Component{
  constructor(props) {
    super(props);
    this.state = { opponentGrid: this.props.opponentGrid };
    // this.restartGrid = this.restartGrid.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
  }
  // 
  // componentWillReceiveProps(){
  //   debugger;
  //   this.setState ({opponentGrid: this.props.opponentGrid});
  // }
  // componentWillMount() {
  //   debugger;
  //   this.setState ({opponentGrid: this.props.opponentGrid});
  // }
    // componentWillUpdate() {
    //   debugger;
    //   this.setState ({opponentGrid: this.props.opponentGrid});
    // }
  // shouldComponentUpdate(){
  //   debugger;
  //   this.setState ({opponentGrid: this.props.opponentGrid});
  // }
  // restartGrid() {
  //   const board = new Minesweeper.Board(9, 10);
  //   this.setState({ board: board });
  // }

  updateGrid(grid) {
    // if (selected) {
      // tile.toggleSelected();
    // }
    debugger;
    this.props.updateOpponentGrid(grid);
    // this.setState({ opponentGrid: this.state.opponentGrid });
  }

  render() {
    debugger;
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
    return (
      <div>
        <OpponentGrid opponentGrid={this.state.opponentGrid} updateGrid={this.updateGrid} />
      </div>
    );
  }
}

export default GridShow;

{/* {modal} */}
