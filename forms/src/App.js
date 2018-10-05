
class FormExample extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        document.querySelector("input[type='text']").focus();
        // document.querySelector("textarea").focus();
    }
    handleChange(e){
        this.setState({ value: e.target.value.toUpperCase()});
    }

    handleSubmit(e){
    console.log("Form value ", this.state.value);
    e.preventDefault();
    }

    render(){
        
        return (<form onSubmit={this.handleSubmit}> 
            <input type="text" onChange = {this.handleChange} value={this.state.value}/>
            {/* <textarea  onChange = {this.handleChange} value={this.state.value} /> */}
            <input type="submit" value="Submit"/>
                </form>);
    }
}

class SelectBoxExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {value : 'driving'}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleSubmit(e){
        console.log("SelectBox value ",this.state.value);
        e.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Please select option <div>&nbsp;</div>
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="walking">Yürüyerek</option>
                <option value="driving">Arabayla</option>
                <option value="transit">Toplu Taşımayla</option>
            </select>
            </label>
            <input type="submit" value="Submit" /> 
            </form>
        );
    }
}
class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing : true,
            numberOfGuests: 2
        }

}

// ReactDOM.render(<FormExample/>,document.getElementById('root'));
ReactDOM.render(<SelectBoxExample/>,document.getElementById('root'));