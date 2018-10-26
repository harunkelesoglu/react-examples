
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
class App extends React.Component {
    render(){
        return (<div>
            <DateComponent/>
            <DateComponent/>
            <DateComponent/>
        </div>)
    }
}

class DateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    }
    componentWillUnMount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({date : new Date()});
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));
