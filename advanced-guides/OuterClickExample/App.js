var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OuterClickExample = function (_React$Component) {
    _inherits(OuterClickExample, _React$Component);

    function OuterClickExample(props) {
        _classCallCheck(this, OuterClickExample);

        var _this = _possibleConstructorReturn(this, (OuterClickExample.__proto__ || Object.getPrototypeOf(OuterClickExample)).call(this, props));

        _this.state = { isOpen: false, modal: 'asdfasd' };
        _this.toggleContainer = React.createRef();
        _this.onClickHandler = _this.onClickHandler.bind(_this);
        _this.onClickOutsideHandler = _this.onClickOutsideHandler.bind(_this);
        return _this;
    }

    _createClass(OuterClickExample, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('click', this.onClickOutsideHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('click', this.onClickOutsideHandler);
        }
    }, {
        key: 'onClickHandler',
        value: function onClickHandler() {
            this.setState(function (currentState) {
                return {
                    isOpen: !currentState.isOpen
                };
            });
        }
    }, {
        key: 'onClickOutsideHandler',
        value: function onClickOutsideHandler(event) {
            debugger;
            if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
                this.setState({ isOpen: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { ref: this.toggleContainer },
                React.createElement(
                    'button',
                    { onClick: this.onClickHandler },
                    'Select an option'
                ),
                this.state.isOpen ? React.createElement(
                    'ul',
                    null,
                    React.createElement(
                        'li',
                        null,
                        'Option 1'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'Option 2'
                    ),
                    React.createElement(
                        'li',
                        null,
                        'Option 3'
                    )
                ) : null
            );
        }
    }]);

    return OuterClickExample;
}(React.Component);

ReactDOM.render(React.createElement(OuterClickExample, null), document.getElementById('root'));