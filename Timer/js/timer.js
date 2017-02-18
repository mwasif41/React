"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer() {
    _classCallCheck(this, Timer);

    return _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).apply(this, arguments));
  }

  _createClass(Timer, [{
    key: "render",
    value: function render() {
      if (this.props.timeLeft == null || this.props.timeLeft == 0) return React.createElement("div", null);
      return React.createElement(
        "h1",
        null,
        "Time left: ",
        this.props.timeLeft
      );
    }
  }]);

  return Timer;
}(React.Component);

var Button = function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "startTimer",
    value: function startTimer(event) {
      return this.props.startTimer(this.props.time);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "button",
        {
          type: "button",
          className: "btn-default btn",
          onClick: function onClick() {
            _this3.props.startTimer(_this3.props.time);
          } },
        this.props.time,
        " seconds"
      );
    }
  }]);

  return Button;
}(React.Component);

var TimerWrapper = function (_React$Component3) {
  _inherits(TimerWrapper, _React$Component3);

  function TimerWrapper(props) {
    _classCallCheck(this, TimerWrapper);

    // timeLeft vo k kitna time bacha
    //timer vo jo set interval kar raha hy

    var _this4 = _possibleConstructorReturn(this, (TimerWrapper.__proto__ || Object.getPrototypeOf(TimerWrapper)).call(this, props));

    _this4.state = { timeLeft: null, timer: null };
    _this4.startTimer = _this4.startTimer.bind(_this4);
    return _this4;
  }

  _createClass(TimerWrapper, [{
    key: "startTimer",
    value: function startTimer(timeLeft) {
      var _this5 = this;

      clearInterval(this.state.timer);
      var timer = setInterval(function () {
        var timeLeft = _this5.state.timeLeft - 1;
        if (timeLeft == 0) clearInterval(timer);
        _this5.setState({ timeLeft: timeLeft });
      }, 1000);
      return this.setState({ timeLeft: timeLeft, timer: timer });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row-fluid" },
        React.createElement(
          "div",
          { className: "btn-group", role: "group" },
          React.createElement(Button, { time: "5", startTimer: this.startTimer }),
          React.createElement(Button, { time: "10", startTimer: this.startTimer }),
          React.createElement(Button, { time: "15", startTimer: this.startTimer })
        ),
        React.createElement(Timer, { timeLeft: this.state.timeLeft })
      );
    }
  }]);

  return TimerWrapper;
}(React.Component);

//////////// RENDERING /////////////////////

ReactDOM.render(React.createElement(TimerWrapper, null), document.getElementById('timer-comp'));     