class BlurExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {isOpen: false}
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlur = this.onBlurHandler.bind(this);
        this.onFocus = this.onFocusHandler.bind(this);
    }
    onClickHandler(){
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }
    onBlurHandler(){
        debugger;
    }
    onFocusHandler(){
        debugger;
    }

    render(){
        return (
            <div onBlur={this.onBlurHandler}
                onFocus={this.onFocusHandler}>
            <button onClick={this.onClickHandler}>Select an Option</button>
            {this.state.isOpen ? (
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
            ): null}
            </div>
        );
    }
}
ReactDOM.render(<BlurExample/>,document.getElementById('root'))