
var ListItem = function ListItem(_ref) {
    var item = _ref.item;
    return (
        // if tooling is support, we can use short syntax such as <> </>
        React.createElement(
            React.Fragment,
            null,
            React.createElement(
                "dt",
                null,
                item.term
            ),
            React.createElement(
                "dd",
                null,
                item.description
            )
        )
    );
};

var Glossary = function Glossary(props) {
    debugger;
    return React.createElement(
        "dl",
        null,
        props.items.map(function (item) {
            return React.createElement(ListItem, { item: item, key: item.id });
        })
    );
};