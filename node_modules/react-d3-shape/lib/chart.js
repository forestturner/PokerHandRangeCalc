"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactD3Core = require('react-d3-core');

var _commonProps = require('./commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartSvg = function (_Component) {
  _inherits(ChartSvg, _Component);

  function ChartSvg(props) {
    _classCallCheck(this, ChartSvg);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props));
  }

  _createClass(ChartSvg, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var horizontal = _props.horizontal;
      var height = _props.height;
      var width = _props.width;
      var margins = _props.margins;
      var xScale = _props.xScale;
      var yScale = _props.yScale;
      var xRange = _props.xRange;
      var yRange = _props.yRange;
      var xDomain = _props.xDomain;
      var yDomain = _props.yDomain;
      var xTicks = _props.xTicks;
      var yTicks = _props.yTicks;
      var xTickFormat = _props.xTickFormat;
      var yTickFormat = _props.yTickFormat;
      var xBandPaddingInner = _props.xBandPaddingInner;
      var xBandPaddingOuter = _props.xBandPaddingOuter;
      var yBandPaddingInner = _props.yBandPaddingInner;
      var yBandPaddingOuter = _props.yBandPaddingOuter;
      var xLabel = _props.xLabel;
      var yLabel = _props.yLabel;
      var stack = _props.stack;
      var data = _props.data;
      var svgClassName = _props.svgClassName;
      var id = _props.id;
      var x = _props.x;
      var y = _props.y;


      var xRange = xRange || [0, width - margins.left - margins.right];
      var yRange = yRange || [height - margins.top - margins.bottom, 0];
      var xDomain = xDomain || (0, _reactD3Core.xDomainCount)(this.props, stack, horizontal);
      var yDomain = yDomain || (0, _reactD3Core.yDomainCount)(this.props, stack, horizontal);

      if (xScale === 'ordinal') xScale = 'band';

      if (yScale === 'ordinal') yScale = 'band';

      var newXScale = {
        scale: xScale,
        range: xRange,
        domain: xDomain,
        bandPaddingInner: xBandPaddingInner,
        bandPaddingOuter: xBandPaddingOuter
      };

      var xScaleSet = (0, _reactD3Core.scale)(newXScale);

      var newYScale = {
        scale: yScale,
        range: yRange,
        domain: yDomain,
        bandPaddingInner: yBandPaddingInner,
        bandPaddingOuter: yBandPaddingOuter
      };

      var yScaleSet = (0, _reactD3Core.scale)(newYScale);

      var children = _react2.default.Children.map(this.props.children, function (el) {
        if (el) {
          return _react2.default.cloneElement(el, {
            height: height,
            width: width,
            margins: margins,
            xScaleSet: xScaleSet,
            yScaleSet: yScaleSet,
            xDomain: xDomain,
            yDomain: yDomain,
            xRange: xRange,
            yRange: yRange,
            xBandPaddingInner: xBandPaddingInner,
            xBandPaddingOuter: xBandPaddingOuter,
            yBandPaddingInner: yBandPaddingInner,
            yBandPaddingOuter: yBandPaddingOuter,
            xScale: xScale,
            yScale: yScale,
            xTickFormat: xTickFormat,
            yTickFormat: yTickFormat,
            xTicks: xTicks,
            yTicks: yTicks,
            xLabel: xLabel,
            yLabel: yLabel,
            data: data,
            x: x,
            y: y
          });
        } else {
          return null;
        }
      });

      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

      return _react2.default.createElement(
        'svg',
        {
          height: height,
          width: width,
          className: svgClassName,
          id: id,
          ref: 'svgContainer'
        },
        _react2.default.createElement(
          'g',
          {
            transform: t
          },
          children
        )
      );
    }
  }]);

  return ChartSvg;
}(_react.Component);

ChartSvg.defaultProps = _extends({
  svgClassName: 'react-d3-core__container_svg'
}, _commonProps2.default);
ChartSvg.propTypes = {
  id: _react.PropTypes.string,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  margins: _react.PropTypes.object.isRequired,
  svgClassName: _react.PropTypes.string.isRequired
};
exports.default = ChartSvg;