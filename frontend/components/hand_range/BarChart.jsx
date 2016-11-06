var React = require('react');
var ReactDOM = require('react-dom');
var BarHorizontalChart = require('react-d3-basic').BarHorizontalChart;

class BarChart extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state ={
      width: 600,
      height: 500,
      series: [
      {
        field: 'Quads',
        name: 'Quads'
      },
      {
        field: 'Full_House',
        name: 'Full_House'
      },
      {
        field: 'Flushes',
        name: 'Flushes'
      },
      {
        field: 'Straights',
        name: 'Straights'
      },
      {
        field: 'Three_of_a_kind',
        name: 'Three_of_a_kind'
      },
      {
        field: 'Two_pair',
        name: 'Two_pair'
      },
      {
        field: 'A_pair',
        name: 'A_pair'
      },
      {
        field: 'Ace_high',
        name: 'Ace_high'
      },
      {
        field: 'Nothing',
        name: 'Nothing'
      },
      {
        field: 'Possbile_flush_draw',
        name: 'Possbile_flush_draw'
      },
    ],
      data:
      [
        {"Quads": this.props.Quads},
        {"Full_House": this.props.Full_House},
        {"Flushes": this.props.Flushes},
        {"Straights": this.props.Straights},
        {"Three_of_a_kind": this.props.Three_of_a_kind},
        {"Two_pair": this.props.Two_pair},
        {"A_pair": this.props.A_pair},
        {"Ace_high": this.props.Ace_high},
        {"Nothing": this.props.Nothing},
        {"Possbile_flush_draw":this.props.Possbile_flush_draw}
      ],
    xScale : 'ordinal',
    xLabel : "Letter",
    yLabel : "Frequency",
    xTicks : [10, "%"],
    yScale : 'linear'

    }
  }

render(){
  var yScale = 'linear';
  console.log(this.state.yScale);
  return(
  <div>

  <BarHorizontalChart
          data= {this.state.data}
          chartSeries = {this.state.series}
          xTicks ={this.state.xTicks}
        />
  </div>
);
}


}



export default BarChart
