'use strict';
class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            liked: false
        }
    }
    liked(){
        this.setState({liked:true});
    }

    render(){
        if(this.state.liked){
            return (<h3>You are liked</h3>)
        }else{
            
        }
        return (<button onClick = {this.liked.bind(this)}>Like</button>);
    }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton/>,domContainer);