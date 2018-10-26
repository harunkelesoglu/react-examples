var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function Messages(props) {
    return React.createElement(
        "h3",
        null,
        props.message
    );
};

var ChatContent = function (_React$Component) {
    _inherits(ChatContent, _React$Component);

    function ChatContent(props) {
        _classCallCheck(this, ChatContent);

        var _this = _possibleConstructorReturn(this, (ChatContent.__proto__ || Object.getPrototypeOf(ChatContent)).call(this, props));

        _this.state = { value: '',
            isShow: false };
        // this.writeChange = this.writeChange.bind(this);
        // this.getTextInput = this.getTextInput.bind(this)
        return _this;
    }

    _createClass(ChatContent, [{
        key: "writeChange",
        value: function writeChange(e) {
            this.setState({ isShow: false });
            this.setState({ value: e.target.value });
            console.log(e.target.value);
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(e) {
            this.setState({ isShow: this.state.value ? true : false });
            e.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "messages-content" },
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit.bind(this) },
                    this.state.isShow ? React.createElement(Messages, { message: this.state.value }) : "Henüz mesaj yok",
                    React.createElement("input", { type: "text", value: this.state.value, onChange: this.writeChange.bind(this) }),
                    React.createElement("input", { type: "submit", value: "submit" })
                )
            );
        }
    }]);

    return ChatContent;
}(React.Component);