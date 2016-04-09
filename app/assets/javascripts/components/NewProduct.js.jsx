class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
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
      debugger;
      this.props.addProduct(product);
    }).error( errors => {
      console.log(errors)
    }).complete( () => {
      name.value = null;
      description.value = null;
    });
  }

  render() {
    return(
      <div className="col s12 m10 offset-m1">
        <h4>Add A New Product</h4>
        <form onSubmit={this.addProduct} >
          <input placeholder="Name" ref="name" required={true} />
          <input placeholder="Description" ref="description" />
          <input placeholder="price" ref="price" />
          <input placeholder="quantity" ref="quantity" />
          <button className="btn">Add</button>
        </form>
      </div>
    );
  }
}