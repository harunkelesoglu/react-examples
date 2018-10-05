
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages : ''
        }
    }

    render(){
        return (<div className="messages">
        <ChatContent /></div>);
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))