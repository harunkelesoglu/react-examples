function UserGreeting(props) {
    return (
        <div>Welcome back.</div>
    );
}
function GuestGreeting(props) {
    return (
        <div>Please sign up</div>
    );
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButon(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}
// function Greeting(props) {
//         const isLoggedIn = props.isLoggedIn
//         if(isLoggedIn){
//             return <UserGreeting/>
//         }
//             return <GuestGreeting/>
    
// }

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
            <Greeting isLoggedIn = {isLoggedIn}/>
            {isLoggedIn &&  <LogoutButon onClick={this.handleLogoutClick} /> || <LoginButton onClick={this.handleLoginClick} />}
            </div>
        )
    }
}

// This component has not been working
//updated it is work now
class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn : props.isLoggedIn}
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
         if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
            this.setState( state => ({ isLoggedIn : this.props.isLoggedIn}))
       }
      }
render(){
    const isLoggedIn = this.state.isLoggedIn;
    return (isLoggedIn) ?  <UserGreeting/> : <GuestGreeting/>;
}
}

ReactDOM.render(<LoginControl/>,document.getElementById('root'));