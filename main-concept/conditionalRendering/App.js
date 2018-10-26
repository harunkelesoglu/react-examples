var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function UserGreeting(props) {
    return React.createElement(
        'div',
        null,
        'Welcome back.'
    );
}
function GuestGreeting(props) {
    return React.createElement(
        'div',
        null,
        'Please sign up'
    );
}
function LoginButton(props) {
    return React.createElement(
        'button',
        { onClick: props.onClick },
        'Login'
    );
}

function LogoutButon(props) {
    return React.createElement(
        'button',
        { onClick: props.onClick },
        'Logout'
    );
}
// function Greeting(props) {
//         const isLoggedIn = props.isLoggedIn
//         if(isLoggedIn){
//             return <UserGreeting/>
//         }
//             return <GuestGreeting/>

// }

var LoginControl = function (_React$Component) {
    _inherits(LoginControl, _React$Component);

    function LoginControl(props) {
        _classCallCheck(this, LoginControl);

        var _this = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

        _this.state = { isLoggedIn: false };
        _this.handleLoginClick = _this.handleLoginClick.bind(_this);
        _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
        return _this;
    }

    _createClass(LoginControl, [{
        key: 'handleLoginClick',
        value: function handleLoginClick() {
            this.setState({ isLoggedIn: true });
        }
    }, {
        key: 'handleLogoutClick',
        value: function handleLogoutClick() {
            this.setState({ isLoggedIn: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var isLoggedIn = this.state.isLoggedIn;
            return React.createElement(
                'div',
                null,
                React.createElement(Greeting, { isLoggedIn: isLoggedIn }),
                isLoggedIn && React.createElement(LogoutButon, { onClick: this.handleLogoutClick }) || React.createElement(LoginButton, { onClick: this.handleLoginClick })
            );
        }
    }]);

    return LoginControl;
}(React.Component);

// This component has not been working
//updated it is work now


var Greeting = function (_React$Component2) {
    _inherits(Greeting, _React$Component2);

    function Greeting(props) {
        _classCallCheck(this, Greeting);

        var _this2 = _possibleConstructorReturn(this, (Greeting.__proto__ || Object.getPrototypeOf(Greeting)).call(this, props));

        _this2.state = { isLoggedIn: props.isLoggedIn };
        return _this2;
    }

    _createClass(Greeting, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var _this3 = this;

            // Typical usage (don't forget to compare props):
            if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
                this.setState(function (state) {
                    return { isLoggedIn: _this3.props.isLoggedIn };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var isLoggedIn = this.state.isLoggedIn;
            return isLoggedIn ? React.createElement(UserGreeting, null) : React.createElement(GuestGreeting, null);
        }
    }]);

    return Greeting;
}(React.Component);

ReactDOM.render(React.createElement(LoginControl, null), document.getElementById('root'));