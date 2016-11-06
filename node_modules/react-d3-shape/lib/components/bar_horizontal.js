"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _series = require('../utils/series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarHorizontal = function (_Component) {
  _inherits(BarHorizontal, _Component);

  function BarHorizontal(props) {
    _classCallCheck(this, BarHorizontal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarHorizontal).call(this, props));
  }

  _createClass(BarHorizontal, [{
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
    key: '_mkBar',
    value: function _mkBar(dom) {
      var _this2 = this;

      var _props = this.props;
      var height = _props.height;
      var margins = _props.margins;
      var barClassName = _props.barClassName;
      var xScaleSet = _props.xScaleSet;
      var yScaleSet = _props.yScaleSet;


      var that = this;
      var dataset = (0, _series.series)(this.props, true)[0];
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
        dataset.data.map(function (bar, i) {
          return _react2.default.createElement('rect', {
            className: barClassName + ' bar',
            y: yScaleSet(bar.y) || yScaleSet(bar.y) === 0 ? yScaleSet(bar.y) : -10000,
            x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
            height: yScaleSet.bandwidth(),
            width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
            fill: bar._style.color ? bar._style.color : dataset.color,
            style: Object.assign({}, dataset.style, bar._style),
            onMouseOut: that.triggerOut.bind(_this2, bar),
            onMouseOver: that.triggerOver.bind(_this2, bar),
            key: i
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var bar = this._mkBar();

      return _react2.default.createElement(
        'g',
        null,
        bar
      );
    }
  }]);

  return BarHorizontal;
}(_react.Component);

BarHorizontal.defaultProps = {
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {},
  barClassName: 'react-d3-basic__bar_horizontal'
};
exports.default = BarHorizontal;