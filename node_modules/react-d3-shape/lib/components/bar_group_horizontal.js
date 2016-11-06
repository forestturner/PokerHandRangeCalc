"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d3Scale = require('d3-scale');

var _d3Scale2 = _interopRequireDefault(_d3Scale);

var _series = require('../utils/series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarGroupHorizontal = function (_Component) {
  _inherits(BarGroupHorizontal, _Component);

  function BarGroupHorizontal(props) {
    _classCallCheck(this, BarGroupHorizontal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupHorizontal).call(this, props));
  }

  _createClass(BarGroupHorizontal, [{
    key: 'triggerOver',
    value: function triggerOver(data, e) {
      this.props.onMouseOver(e, data);
    }
  }, {
    key: 'triggerOut',
    value: function triggerOut(data, e) {
      this.props.onMouseOut(e, data);
    }
  }, {
    key: '_mkBarGroup',
    value: function _mkBarGroup() {
      var _this2 = this;

      var _props = this.props;
      var height = _props.height;
      var margins = _props.margins;
      var barClassName = _props.barClassName;
      var xScaleSet = _props.xScaleSet;
      var yScaleSet = _props.yScaleSet;
      var onMouseOut = _props.onMouseOut;
      var onMouseOver = _props.onMouseOver;


      var that = this;
      var dataset = (0, _series.series)(this.props, true);
      var y1 = _d3Scale2.default.scaleBand();

      // mapping x1, inner x axis
      y1.domain(dataset.map(function (d) {
        return d.field;
      })).range([0, yScaleSet.bandwidth()]).padding(.1).round(true);

      var domain = xScaleSet.domain();
      var zeroBase;

      if (domain[0] * domain[1] < 0) {
        zeroBase = xScaleSet(0);
      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
        zeroBase = xScaleSet.range()[0];
      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
        zeroBase = xScaleSet.range()[1];
      }

      return _react2.default.createElement(
        'g',
        null,
        dataset.map(function (barGroup, i) {
          return _react2.default.createElement(
            'g',
            { className: 'bargroup', key: i },
            barGroup.data.map(function (bar, j) {
              return _react2.default.createElement('rect', {
                className: barClassName + ' bar',
                height: y1.bandwidth(),
                y: yScaleSet(bar.y) || yScaleSet(bar.y) === 0 ? yScaleSet(bar.y) + y1.bandwidth() * i : -10000,
                x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
                width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
                fill: barGroup.color,
                onMouseOut: that.triggerOut.bind(_this2, bar),
                onMouseOver: that.triggerOver.bind(_this2, bar),
                style: barGroup.style,
                key: j
              });
            })
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var bar = this._mkBarGroup();

      return _react2.default.createElement(
        'g',
        null,
        bar
      );
    }
  }]);

  return BarGroupHorizontal;
}(_react.Component);

BarGroupHorizontal.defaultProps = {
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {},
  barClassName: 'react-d3-basic__bar_group_horizontal'
};
exports.default = BarGroupHorizontal;