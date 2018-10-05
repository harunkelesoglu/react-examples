
var todos = ["learn react", "learn cors", "learn authentication", "learn how browsers work"];

function Lists(props) {
    var todoList = props.todos;
    var listItems = todoList.map(function (todo, index) {
        return React.createElement(
            "li",
            null,
            todo
        );
    });
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "To Do List"
        ),
        React.createElement(
            "ul",
            null,
            listItems
        )
    );
}
function deleteItem(e) {
    console.log(e);
}
function Button(props) {
    return React.createElement(
        "button",
        { onClick: props.onClick },
        "sil"
    );
}

function ListsInJSX(props) {
    var _this = this;

    var todoList = props.todos;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "ul",
            null,
            todoList.map(function (todo, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    todo,
                    React.createElement(Button, { onClick: deleteItem.bind(_this) })
                );
            })
        )
    );
}
ReactDOM.render(React.createElement(ListsInJSX, { todos: todos }), document.getElementById('root'));