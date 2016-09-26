import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart, Bar}  from 'recharts';

class Chart extends React.Component{
  constructor (props, context) {
    super(props, context)
    this.state ={
      data: [
      //   {table: "0",
      //   Quads: 0,
      //   Full_House: 0,
      //   Flushes: 0,
      //   Straights: 0,
      //   Three_of_a_kind: 0,
      //   Two_pair: 0,
      //   A_pair: 0,
      //   Ace_high: 0,
      //   Nothing: 0,
      //   Possbile_flush_draw:0
      // },
        {table: this.props.deadCardsTable,
        Quads: this.props.Quads,
        Full_House: this.props.Full_House,
        Flushes: this.props.Flushes,
        Straights: this.props.Straights,
        Three_of_a_kind: this.props.Three_of_a_kind,
        Two_pair: this.props.Two_pair,
        A_pair: this.props.A_pair,
        Ace_high: this.props.Ace_high,
        Nothing: this.props.Nothing,
        Possbile_flush_draw:this.props.Possbile_flush_draw
      }
      //   {table: "2",
      //   Quads: 0,
      //   Full_House: 0,
      //   Flushes: 0,
      //   Straights: 0,
      //   Three_of_a_kind: 0,
      //   Two_pair: 0,
      //   A_pair: 0,
      //   Ace_high: 0,
      //   Nothing: 0,
      //   Possbile_flush_draw:0
      // }
    ]
  }
}
  componentDidUpdate(){


      this.state.data[0] = {
        Quads: this.props.Quads,
        Full_House: this.props.Full_House,
        Flushes: this.props.Flushes,
        Straights: this.props.Straights,
        Three_of_a_kind: this.props.Three_of_a_kind,
        Two_pair: this.props.Two_pair,
        A_pair: this.props.A_pair,
        Ace_high: this.props.Ace_high,
        Nothing: this.props.Nothing,
        Possbile_flush_draw:this.props.Possbile_flush_draw
    }
  }


  render(){

    return(
    <BarChart width={600} height={300} data={this.state.data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>

      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Bar dataKey="A_pair" fill="#8884d8" />
      <Bar dataKey="Ace_high" fill="#82ca9d" />
      <Bar dataKey="Quads" fill='#8889DD' />
      <Bar dataKey="Flushes" fill='#9597E4' />
      <Bar dataKey="Straights" fill='#8DC77B' />
      <Bar dataKey="Three_of_a_kind" fill='#A5D297' />
      <Bar dataKey="Two_pair" fill='#E2CF45' />
      <Bar dataKey="Nothing" fill='#F8C12D' />
      <Bar dataKey="Possbile_flush_draw" fill="#72ca9d" />
    </BarChart>
  );
  }
}

export default Chart
