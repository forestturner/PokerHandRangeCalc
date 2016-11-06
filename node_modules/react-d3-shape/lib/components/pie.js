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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pie = function (_Component) {
  _inherits(Pie, _Component);

  function Pie(props) {
    _classCallCheck(this, Pie);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Pie).call(this, props));
  }

  _createClass(Pie, [{
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
    key: 'mkSeries',
    value: function mkSeries() {
      var _props = this.props;
      var data = _props.data;
      var chartSeries = _props.chartSeries;
      var value = _props.value;
      var name = _props.name;
      var categoricalColors = _props.categoricalColors;


      var chartSeriesData = chartSeries.map(function (f, i) {

        // set a color if not set
        if (!f.color) f.color = categoricalColors(i);

        // set name if not set
        if (!f.name) f.name = f.field;

        var val;

        data.forEach(function (d) {
          if (name(d) === f.field) val = d;
        });

        return Object.assign(f, { value: value(val) });
      });

      return chartSeriesData;
    }
  }, {
    key: '_mkPie',
    value: function _mkPie() {
      var _this2 = this;

      var _props2 = this.props;
      var width = _props2.width;
      var height = _props2.height;
      var innerRadius = _props2.innerRadius;
      var outerRadius = _props2.outerRadius;
      var pieSort = _props2.pieSort;
      var value = _props2.value;
      var radius = _props2.radius;
      var pieTextShow = _props2.pieTextShow;


      var that = this;
      var radius = this.props.radius || Math.min(width - 100, height - 100) / 2;
      var outerRadius = outerRadius || radius - 10;
      var labelr = radius + 10;

      var chartSeriesData = this.mkSeries();

      var arc = _d3Shape2.default.arc().outerRadius(outerRadius).innerRadius(innerRadius);

      var arcOver = _d3Shape2.default.arc().outerRadius(outerRadius + 10).innerRadius(innerRadius);

      var pie = _d3Shape2.default.pie().sort(function (a, b) {
        return pieSort(a.value, b.value);
      }).value(function (d) {
        return d.value;
      });

      return _react2.default.createElement(
        'g',
        { className: 'arc' },
        pie(chartSeriesData).map(function (slice, i) {
          var textTransform = function textTransform(d) {
            var c = arc.centroid(d),
                x = c[0],
                y = c[1],

            // pythagorean theorem for hypotenuse
            h = Math.sqrt(x * x + y * y);

            return "translate(" + x / h * labelr + ',' + y / h * labelr + ")";
          };

          var textAnchor = function textAnchor(d) {
            return (d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start";
          };

          return _react2.default.createElement(
            'g',
            { key: i },
            _react2.default.createElement('path', {
              d: arc(slice),
              style: _extends({ fill: slice.data.color, stroke: '#FFF' }, slice.data.style),
              onMouseOut: that.triggerOut.bind(_this2, slice),
              onMouseOver: that.triggerOver.bind(_this2, slice)
            }),
            pieTextShow ? _react2.default.createElement(
              'text',
              {
                transform: textTransform(slice),
                dy: '.35em',
                textAnchor: textAnchor(slice)
              },
              slice.data.name
            ) : null
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var width = _props3.width;
      var height = _props3.height;
      var margins = _props3.margins;


      var t = 'translate(' + (width - margins.left - margins.right) / 2 + ',  ' + (height - margins.top - margins.bottom) / 2 + ')';
      var pie = this._mkPie();

      return _react2.default.createElement(
        'g',
        { transform: t },
        pie
      );
    }
  }]);

  return Pie;
}(_react.Component);

Pie.defaultProps = _extends({
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {}
}, _commonProps.pieProps);
exports.default = Pie;