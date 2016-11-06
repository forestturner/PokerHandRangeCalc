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

var Line = function (_Component) {
  _inherits(Line, _Component);

  function Line(props) {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props));
  }

  _createClass(Line, [{
    key: '_mkLine',
    value: function _mkLine(dom) {
      var lineClassName = this.props.lineClassName;


      var dataset = (0, _series.series)(this.props);
      var that = this;

      return _react2.default.createElement(
        'g',
        null,
        dataset.map(function (line, i) {
          return _react2.default.createElement('path', {
            stroke: line.color,
            fill: 'none',
            className: lineClassName + ' line',
            d: that._setAxes(line.data),
            style: line.style,
            key: i });
        })
      );
    }
  }, {
    key: '_setAxes',
    value: function _setAxes(data) {
      var _props = this.props;
      var xScaleSet = _props.xScaleSet;
      var yScaleSet = _props.yScaleSet;


      var line = _d3Shape2.default.line().x(function (d) {
        return xScaleSet(d.x);
      }).y(function (d) {
        return yScaleSet(d.y);
      });

      return line.call(this, data);
    }
  }, {
    key: 'render',
    value: function render() {
      var line = this._mkLine();

      return _react2.default.createElement(
        'g',
        null,
        line
      );
    }
  }]);

  return Line;
}(_react.Component);

Line.defaultProps = _extends({
  interpolate: null,
  lineClassName: 'react-d3-basic__line'
}, _commonProps2.default);
exports.default = Line;