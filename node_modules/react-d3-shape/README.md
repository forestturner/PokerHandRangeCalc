# react-d3-shape

[![Dependency Status](https://gemnasium.com/react-d3/react-d3-shape.svg)](https://gemnasium.com/react-d3/react-d3-shape)

react-d3 basic shapes, shapes that we support:

- Line
- Area
- AreaStack
- BarGroupHorizontal
- BarGroup
- BarStackHorizontal
- BarStack
- BarHorizontal
- Bar
- Pie
- Scatter


## Install

```
npm install --save react-d3-shape
```

## Quick example

#### Building Line Chart, with Area Chart and Scatter Plot

- Line Chart with Area chart

```js
<div>
  <Chart
    width= {this.state.width}
    height= {this.state.height}
    data= {generalChartData}
    chartSeries= {this.state.series}
    x= {x}
    >
    <Line
      chartSeries= {this.state.series}
    />
    <Area
      chartSeries= {this.state.series2}
    />
    <Scatter
      chartSeries= {this.state.series2}
    <Xaxis/>
    <Yaxis/>
    <Xgrid/>
    <Ygrid/>
  </Chart>
</div>

```

## Develop

```
$ sudo npm i
$ node devServer.js
```

and open `localhost:5000/example`

Build production `js`, `min.js` code

```
$ npm run prod
```

## License

Apache 2.0
