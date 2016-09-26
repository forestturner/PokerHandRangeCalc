import React from 'react';

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // const flagged = e.altKey ? true : false;
    // const flagged = e.altKey ? true : false;

    // this.props.updateGame(this.props.tile, selected);
    this.props.tile.toggleSelected();
    if(this.props.updateOGrid !== undefined){
      this.props.updateOGrid(this.props.opponentGrid);
    } else if (this.props.updateHGrid !== undefined) {
      this.props.updateHGrid(this.props.heroGrid);
    } else {
      this.props.updateTGrid(this.props.tableGrid);
    }
  }

  render() {
    const tile = this.props.tile;
    const text = tile.string;
    let klass;
    if (tile.selected){
      klass = 'selected'
    } else {
      klass = 'unselected'
    }


    if(tile.color === "red")
    {
      klass = `tile ${klass} red`;
    } else if (tile.color ==="black")
    {
      klass = `tile ${klass} black`;
    } else {
      klass = `tile ${klass}`;
    }


    return (
      <div className={klass} onClick={this.handleClick}>{text}</div>

    );
  }
}

export default Tile;
{/* <div  onClick={this.handleClick}>{text}</div> */}
