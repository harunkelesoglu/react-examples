
const todos = ["learn react","learn cors","learn authentication","learn how browsers work"];


function Lists (props) {
    const todoList = props.todos;
    const listItems = todoList.map( (todo,index) => <li>{todo}</li>);
    return (<div>
       <h3>To Do List</h3>
       <ul>{listItems}</ul> 
    </div>);
}
function deleteItem(e){
    console.log(e);
}
function Button(props){
    return (<button onClick={props.onClick}>sil</button>);
}

function ListsInJSX(props){
    const todoList = props.todos;
    
    return (<div>
        <ul>{ todoList.map( (todo,index) =>{ 
        return (
        <li key={index}>{todo}
        <Button onClick={(deleteItem.bind(this))}/></li>
        )})}</ul>
    </div>);

}
ReactDOM.render(<ListsInJSX todos={todos}/>,document.getElementById('root'))