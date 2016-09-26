import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.props.opponentGrid.sliderChange(value/100);
    this.props.updateOGrid(this.props.opponentGrid);
    this.setState({
      value: value
    });
  }

  render () {
    const { value } = this.state
    return (
      <div className='horizontal-slider'>
        <h4>Calculate range </h4>
        <Slider
          min={0}
          max={100}
          value={value}
          step={.5}
          onChange={this.handleChange}
        />
        <div className='value'>Top percentage: {value} % of hands</div>
        <hr />
      </div>
    )
  }
}

export default Horizontal
