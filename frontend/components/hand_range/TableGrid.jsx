import Tile from './tile';
import React from 'react';

class TableGrid extends React.Component{
  constructor(props){
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  render() {
    const tableGrid = this.props.tableGrid;
    const that = this;
    return(
      <div className="block">
      <h3>flopped cards</h3>
        {this.renderRows()}
      </div>
    );
  }

  renderRows() {
    const tableGrid = this.props.tableGrid;
    return tableGrid.grid.map( (row, i) => {
      return (
        <div className="rowT" key={`row-${i}`}>
          {this.renderTiles(row, i)}
        </div>
      );
    });
  }

  renderTiles(row, i){
    const tableGrid = this.props.tableGrid;
    return row.map( (tile, j) => {
      return (
        <Tile
          tile={tile}
          tableGrid={tableGrid}
          updateTGrid={this.props.updateTGrid}
          key={i * 4 + j} />
      );
    });
  }

}

export default TableGrid;
