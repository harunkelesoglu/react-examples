
const Messages = (props) => {
    return <h3>{props.message}</h3>
}
class ChatContent extends React.Component{
    constructor(props){
        super(props);
         this.state= {value : '',
        isShow:false};
        // this.writeChange = this.writeChange.bind(this);
        // this.getTextInput = this.getTextInput.bind(this)
    }
    writeChange(e){
        this.setState({isShow : false})
        this.setState({value: e.target.value})
       console.log(e.target.value);
    }
    handleSubmit(e){
        this.setState({isShow: (this.state.value) ? true : false});
        e.preventDefault();
    }
    render(){
        
        return (<div className="messages-content">
            <form onSubmit={this.handleSubmit.bind(this)}>
                { (this.state.isShow) ? <Messages message={this.state.value}/> : "Henüz mesaj yok" } 
                <input type="text" value = {this.state.value } onChange = {this.writeChange.bind(this)}/>
                <input type="submit" value="submit"/>
            </form>
        </div>);
    }
}
