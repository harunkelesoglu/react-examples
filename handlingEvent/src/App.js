class Toggle extends React.Component {
    constructor() {
        super();
        this.state = { isToggleOn: false }
        this.handleClick = this.handleClick.bind(this)
    }

    //If calling bind annoys you, there are two ways you can get around this
    
    //The first is class field sytanx
    
    // handleClick = () => {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }))
    // }

    // The second is arrow function in callback
    //You should change the onClick as below 
    //onClick = {(e) => this.handleClick(e)}
    // handleClick(){
    //     console.log("this is a",this);
    // }
    

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (<button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>)
    }
}

ReactDOM.render(<Toggle/>,document.getElementById('root'));