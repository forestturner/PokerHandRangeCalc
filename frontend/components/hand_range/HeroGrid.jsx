import Tile from './tile';
import React from 'react';

class HeroGrid extends React.Component{
  constructor(props){
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
    this.handleClearBoard = this.handleClearBoard.bind(this);
  }

  handleClearBoard(e){

    if (e){
      this.props.heroGrid.clearBoard();
       this.props.updateHGrid(this.props.heroGrid);
    }
  }

  render() {
    const heroGrid = this.props.heroGrid;
    const that = this;

    return(

      <div className="block">
        <h3>Dead cards</h3>
        {this.renderRows()}
        <button className="reset" onClick={this.handleClearBoard}>
        reset
        </button>
      </div>
    
    );
  }

  renderRows() {
    const heroGrid = this.props.heroGrid;
    return heroGrid.grid.map( (row, i) => {
      return (
        <div className="rowH" key={`row-${i}`}>
          {this.renderTiles(row, i)}
        </div>
      );
    });
  }

  renderTiles(row, i){
    const heroGrid = this.props.heroGrid;
    return row.map( (tile, j) => {
      return (
        <Tile
          tile={tile}
          heroGrid={heroGrid}
          updateHGrid={this.props.updateHGrid}
          key={i * 4 + j} />
      );
    });
  }

}

export default HeroGrid;
