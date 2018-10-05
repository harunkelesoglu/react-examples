var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// function DateComponent(props){
//     return (
//         <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date}.</h2>
//       </div>
//     );
// }
// function tick(){
//     ReactDOM.render(<DateComponent date={new Date().toLocaleTimeString()}/>, document.getElementById('root'));
// }
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(DateComponent, null),
                React.createElement(DateComponent, null),
                React.createElement(DateComponent, null)
            );
        }
    }]);

    return App;
}(React.Component);

var DateComponent = function (_React$Component2) {
    _inherits(DateComponent, _React$Component2);

    function DateComponent(props) {
        _classCallCheck(this, DateComponent);

        var _this2 = _possibleConstructorReturn(this, (DateComponent.__proto__ || Object.getPrototypeOf(DateComponent)).call(this, props));

        _this2.state = { date: new Date() };
        return _this2;
    }

    _createClass(DateComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.timerID = setInterval(function () {
                return _this3.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({ date: new Date() });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello, world!'
                ),
                React.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString(),
                    '.'
                )
            );
        }
    }]);

    return DateComponent;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));