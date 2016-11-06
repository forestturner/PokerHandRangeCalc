"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Shape = require('d3-shape');

var _d3Shape2 = _interopRequireDefault(_d3Shape);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _series = require('../utils/series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AreaStack = function (_Component) {
  _inherits(AreaStack, _Component);

  function AreaStack(props) {
    _classCallCheck(this, AreaStack);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaStack).call(this, props));
  }

  _createClass(AreaStack, [{
    key: '_mkStack',
    value: function _mkStack() {
      var areaClassName = this.props.areaClassName;


      var dataset = (0, _series.series)(this.props);

      var _setStack = this._setStack();
      var _setAxes = this._setAxes();

      return _react2.default.createElement(
        'g',
        null,
        _setStack(dataset).map(function (area) {
          return _react2.default.createElement('path', {
            className: areaClassName + ' area',
            fill: area.color,
            d: _setAxes(area.data),
            style: area.style
          });
        })
      );
    }
  }, {
    key: '_setStack',
    value: function _setStack() {
      var chartSeries = this.props.chartSeries;


      var buildOut = function buildOut(len) {
        // baseline for positive and negative bars respectively.
        var currentXOffsets = [];
        var currentXIndex = 0;
        return function (d, y0, y) {

          if (currentXIndex++ % len === 0) {
            currentXOffsets = [0, 0];
          }

          if (y >= 0) {
            d.y0 = currentXOffsets[1];
            d.y = y;
            currentXOffsets[1] += y;
          } else {
            d.y0 = currentXOffsets[0] + y;
            d.y = -y;
            currentXOffsets[0] += y;
          }
        };
      };
      return d3.layout.stack().values(function (d) {
        return d.data;
      }).out(buildOut(chartSeries.length));
    }
  }, {
    key: '_setAxes',
    value: function _setAxes() {
      var _props = this.props;
      var xScaleSet = _props.xScaleSet;
      var yScaleSet = _props.yScaleSet;


      return _d3Shape2.default.area().x(function (d) {
        return xScaleSet(d.x);
      }).y0(function (d) {
        return yScaleSet(d.y0);
      }).y1(function (d) {
        return yScaleSet(d.y0 + d.y);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var area = this._mkStack();

      return _react2.default.createElement(
        'g',
        null,
        area
      );
    }
  }]);

  return AreaStack;
}(_react.Component);

AreaStack.defaultProps = _extends({
  areaClass: 'react-d3-basics__area_stack',
  areaClassName: 'react-d3-basic__area_stack'
}, _commonProps2.default);
exports.default = AreaStack;