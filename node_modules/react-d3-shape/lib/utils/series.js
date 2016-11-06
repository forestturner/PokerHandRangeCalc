"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.series = series;

var _d = require("d3");

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function series(props, horizontal) {
  var data = props.data;
  var chartSeries = props.chartSeries;
  var x = props.x;
  var y = props.y;
  var categoricalColors = props.categoricalColors;


  categoricalColors = categoricalColors || _d2.default.scale.category10();

  var chartSeriesData = chartSeries.map(function (f, i) {

    // set a color if not set
    f.color = f.color || categoricalColors(i);

    // set name if not set
    f.name = f.name || f.field;

    // mapping throught data set x, y data
    var mapping = data.map(function (d) {
      if (!d._style) d._style = {};

      if (!horizontal) {
        return {
          x: x(d),
          y: y(d[f.field]),
          color: f.color,
          name: f.name,
          field: f.field,
          _style: d._style
        };
      } else {
        return {
          y: y(d),
          x: x(d[f.field]),
          color: f.color,
          name: f.name,
          field: f.field,
          _style: d._style
        };
      }
    });

    return Object.assign(f, { data: mapping });
  });

  return chartSeriesData;
}