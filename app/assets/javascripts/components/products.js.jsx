class Products extends React.Component{
  constructor(props) {
    super(props);
    this.state = { products: this.props.products, loaded: false };
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.displayProducts = this.displayProducts.bind(this);
  }

  addProduct(e) {
    e.preventDefault();
    let name = this.refs.name;
    let description = this.refs.description;
    let price = this.refs.price;
    let quantity = this.refs.quantity;
    $.ajax({
      url: '/products',
      type: 'POST',
      data: { product: {name: name.value, description: description.value, price: price.value, quantity: quantity.value  } },
      dataType: 'JSON',
    }).success( product => {
      let products = this.state.products;
      products.push(product);
      this.setState({products: products});
      
    }).error( errors => {
      console.log(errors)
    }).complete( () => {
      name.value = null;
      description.value = null;
    });
  }

  displayProducts() {
    return this.state.products.map(productData => {
      let product = productData.product
      let key = `product=${product.id}`;
      return(<Product key={key} url={productData.url} updateProduct={this.updateProduct} addProduct={this.addProduct} deleteUser={this.deleteProduct} product={product} {...product} />);
    })
  }

  updateProduct(product) {
    $.ajax({
      url: `/products/${product.id}`,
      type: 'PUT',
      data: { product: {...product}},
      dataType: 'JSON'
    }).success( product => {
      debugger
      let products = this.state.products;
      let editproduct = products.find( b => b.id === product.id)
      editproduct.name = product.name;
      editproduct.description = product.description;
      editproduct.price = product.price;
      editproduct.quantity = product.quantity;
      this.setState({ products: products });
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

  // addProduct(product) {
  //   this.setState({ products: [product, ...this.state.products]});
  // }

  render() {


    let products = [];
    if(this.props.products){
      products = this.state.products.map( product => {
        return(<Product key={`product-${product.id}`} {...product} delete={this.deleteProduct} updateProduct={this.updateProduct} />);
      });
    }
    if (this.props.current_user.employee) {
      return(
        <div>
        <div>
          <div className="col s12 m10 offset-m1 container">
            <h4 className="center">Add A New Product</h4>
            <form onSubmit={this.addProduct} >
              <input placeholder="Name" ref="name" required={true} />
              <input placeholder="Description" ref="description" />
              <input placeholder="price" ref="price" />
              <input placeholder="quantity" ref="quantity" />
                <div className="center">
                  <button type='submit' className="center btn-large">Add</button>
                </div>
            </form>
          </div>
        </div>

        <div>
          <hr/>
          <div className="row">
            <h2 className="center">Products</h2>
            {products}
          </div>
        </div>

    return(
      <div>
        <div className="row">
          <br />
          <h2 className="center products-title">Products</h2>
          {products}
        </div>
        <br />
        <hr />
        <div className="col s12 m10 offset-m1 container">
          <h4 className="center addproduct">Add A New Product</h4>
          <form className='addproductform' onSubmit={this.addProduct} >
            <input className='placeholder' placeholder="Name" ref="name" required={true} />
            <input placeholder="Description" className='placeholder' ref="description" />
            <input placeholder="price" ref="price" className='placeholder' />
            <input placeholder="quantity" ref="quantity" className='placeholder' />
              <div className="center">
                <button type='submit' className="center btn-large">Add</button>
              </div>
          </form>
        </div>
>>>>>>> 492acfcec3757e746b960c1a59a04ef106db8f57
      </div>

      );
    } else {
      return(
        <div>
          <hr/>
          <div className="row">
            <h2 className="center">Products</h2>
            {products}
          </div>
        </div>
      );
    }
  }
}