class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { liked:false }
    }

    liked(){
        this.setState({ 'liked':true });;
    }
    render(){
        if(this.state.liked){
            return 'You liked comment number ' + this.props.commentID;
        }

        return (<button onClick = {this.liked.bind(this)}>Like</button>)
    }
}

document.querySelectorAll('.like_button_container').forEach( domContainer => {
    console.log(domContainer);
    const commentID = parseInt(domContainer.dataset.commentid,10);
    ReactDOM.render(<LikeButton commentID = {commentID} />,domContainer);
});

