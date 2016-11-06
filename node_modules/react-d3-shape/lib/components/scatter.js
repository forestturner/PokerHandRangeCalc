"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Shape = require('d3-shape');

var _d3Shape2 = _interopRequireDefault(_d3Shape);

var _series = require('../utils/series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scatter = function (_Component) {
  _inherits(Scatter, _Component);

  function Scatter(props) {
    _classCallCheck(this, Scatter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Scatter).call(this, props));
  }

  _createClass(Scatter, [{
    key: '_mkScatter',
    value: function _mkScatter(dataset) {
      var _props = this.props;
      var scatterClassName = _props.scatterClassName;
      var defaultSymbol = _props.defaultSymbol;
      var defaultSymbolSize = _props.defaultSymbolSize;
      var brushSymbol = _props.brushSymbol;
      var xScaleSet = _props.xScaleSet;
      var yScaleSet = _props.yScaleSet;

      // for building symbols in brush, set to circle and size to 4

      if (brushSymbol) {
        symbol = 'circle';
        symbolSize = 4;
      }

      return _react2.default.createElement(
        'g',
        null,
        dataset.map(function (dot) {
          var symbol = dot.symbol ? dot.symbol : defaultSymbol;
          var symbolSize = dot.symbolSize ? dot.symbolSize : defaultSymbolSize;

          return dot.data.map(function (d) {
            var symbolFunc = _d3Shape2.default.symbol().size(symbolSize * symbolSize).type(function () {
              console.log(symbol);

              if (symbol === 'circle') {
                return _d3Shape2.default.symbolCircle;
              } else if (symbol === 'cross') {
                return _d3Shape2.default.symbolCross;
              } else if (symbol === 'diamond') {
                return _d3Shape2.default.symbolDiamond;
              } else if (symbol === 'square') {
                return _d3Shape2.default.symbolSquare;
              } else if (symbol === 'star') {
                return _d3Shape2.default.symbolStar;
              } else if (symbol === 'triangle') {
                return _d3Shape2.default.symbolTriangle;
              } else if (symbol === 'wye') {
                return _d3Shape2.default.symbolWye;
              } else {
                console.error('Symbol is not support ' + symbol + '.');
              }
            });

            return _react2.default.createElement('path', {
              className: 'react-d3-basic__scatter__path',
              fill: d.color,
              transform: "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")",
              d: symbolFunc(),
              style: dot.style
            });
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var d = (0, _series.series)(this.props);
      var scatter = this._mkScatter(d);

      return _react2.default.createElement(
        'g',
        null,
        scatter
      );
    }
  }]);

  return Scatter;
}(_react.Component);

Scatter.defaultProps = {
  defaultSymbol: 'circle',
  defaultSymbolSize: 10,
  scatterClassName: 'react-d3-basic__scatter'
};
exports.default = Scatter;