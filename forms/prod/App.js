var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormExample = function (_React$Component) {
    _inherits(FormExample, _React$Component);

    function FormExample(props) {
        _classCallCheck(this, FormExample);

        var _this = _possibleConstructorReturn(this, (FormExample.__proto__ || Object.getPrototypeOf(FormExample)).call(this, props));

        _this.state = { value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(FormExample, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            document.querySelector("input[type='text']").focus();
            // document.querySelector("textarea").focus();
        }
    }, {
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ value: e.target.value.toUpperCase() });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            console.log("Form value ", this.state.value);
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement("input", { type: "text", onChange: this.handleChange, value: this.state.value }),
                React.createElement("input", { type: "submit", value: "Submit" })
            );
        }
    }]);

    return FormExample;
}(React.Component);

var SelectBoxExample = function (_React$Component2) {
    _inherits(SelectBoxExample, _React$Component2);

    function SelectBoxExample(props) {
        _classCallCheck(this, SelectBoxExample);

        var _this2 = _possibleConstructorReturn(this, (SelectBoxExample.__proto__ || Object.getPrototypeOf(SelectBoxExample)).call(this, props));

        _this2.state = { value: 'driving' };
        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }

    _createClass(SelectBoxExample, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({ value: e.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            console.log("SelectBox value ", this.state.value);
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement(
                    "label",
                    null,
                    "Please select option ",
                    React.createElement(
                        "div",
                        null,
                        "\xA0"
                    ),
                    React.createElement(
                        "select",
                        { value: this.state.value, onChange: this.handleChange },
                        React.createElement(
                            "option",
                            { value: "walking" },
                            "Y\xFCr\xFCyerek"
                        ),
                        React.createElement(
                            "option",
                            { value: "driving" },
                            "Arabayla"
                        ),
                        React.createElement(
                            "option",
                            { value: "transit" },
                            "Toplu Ta\u015F\u0131mayla"
                        )
                    )
                ),
                React.createElement("input", { type: "submit", value: "Submit" })
            );
        }
    }]);

    return SelectBoxExample;
}(React.Component);

var Reservation = function (_React$Component3) {
    _inherits(Reservation, _React$Component3);

    function Reservation(props) {
        _classCallCheck(this, Reservation);

        var _this3 = _possibleConstructorReturn(this, (Reservation.__proto__ || Object.getPrototypeOf(Reservation)).call(this, props));

        _this3.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        return _this3;
    }

    return Reservation;
}(React.Component);

// ReactDOM.render(<FormExample/>,document.getElementById('root'));


ReactDOM.render(React.createElement(SelectBoxExample, null), document.getElementById('root'));