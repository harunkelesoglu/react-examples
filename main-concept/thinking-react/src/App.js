
class ProductRow extends React.Component{
    render(){
        const product=this.props.product;
        return(
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

class ProductCategoryRow extends React.Component{
    render(){
        const category = this.props.category;
        return(<tr><b>{category}</b></tr>);
    }
}

class ProductTable extends React.Component{
    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            if(inStockOnly && !product.stocked){
                return;
            }
            
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category}/> 
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name}/>
            );
            lastCategory = product.category;
        })
        return (
            <table>
                <th>
                   <tr>
                       <th>Name</th>
                       <th>Price</th>
                   </tr>
                </th>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e){
        this.props.onInStockChange(e.target.checked);
    }
    
    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return(
            <form>
                <input type="text" placeholder="Seacrh..." value={filterText} onChange={this.handleFilterTextChange}/><br/>
                <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockChange}/> Only show products in stock
            </form>
        );
    }
} 
class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(text){
        this.setState({filterText:text})
    }

    handleInStockChange(inStockOnly){
        this.setState({inStockOnly: inStockOnly});
    }
    render(){
        return (
            <div>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextChange} onInStockChange={this.handleInStockChange}/>
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
            </div>
        );
    }
}
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,document.getElementById('root'));