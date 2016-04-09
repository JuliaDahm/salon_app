class Products extends React.Component{
  constructor(props) {
    super(props);
    this.state = { products: this.props.products };
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  updateProduct(id, product) {
    $.ajax({
      url: `/product/${id}`,
      type: 'PUT',
      data: { product: {...product}},
      dataType: 'JSON'
    }).success( product => {
      let products = this.state.products;
      let editproduct = products.find( b => b.id === product.id)
      editproduct.name = product.name;
      editproduct.description = product.description;
      setState({ products: products });
    });
  }

  deleteProduct(id) {
    $.ajax({
      url: `/products/${id}`,
      type: 'DELETE'
    }).success( product => {
      let products = this.state.products;
      let index = products.findIndex( b => b.id === product.id);
      products.splice(index, 1)
      this.setState({ products: products });
    });
  }

  addProduct(product) {
    this.setState({ products: [product, ...this.state.products]});
  }

  render() {
    let products = this.state.products.map( product => {
      return(<product key={`product-${product.id}`} {...product} delete={this.deleteProduct} updateProduct={this.updateProduct} />);
    });
    return(
      <div className="row">
        <Newproduct addProduct={this.addProduct} />
        <h2 className="center">products</h2>
        {products}
      </div>
    );
  }
}