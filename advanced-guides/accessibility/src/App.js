
const ListItem = ({item}) => (
    // if tooling is support, we can use short syntax such as <> </>
    <React.Fragment> 
        <dt>{item.term}</dt>
        <dd>{item.description}</dd>
    </React.Fragment>
);

const Glossary = (props) => {
    debugger;
    return(
        <dl>
            {props.items.map( item => (
                <ListItem item={item} key={item.id} />
            ))}
        </dl>
    );
}

