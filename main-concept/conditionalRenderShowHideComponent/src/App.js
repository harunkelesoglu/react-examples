
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (<div>Warning!</div>)
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isWarn: false
        };
    }

    handleClick(){
        this.setState( state => ({
            isWarn : !state.isWarn
        }))
    }
    render() {
        return (
        <div>
            <WarningBanner warn={this.state.isWarn} />
            <button onClick = {this.handleClick}>{
                this.state.isWarn ? 'Hide' : 'Show'
            }</button>
        </div>);
    }
}

ReactDOM.render(<Page/>,document.getElementById('root'));