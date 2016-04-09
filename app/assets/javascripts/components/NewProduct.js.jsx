class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(e) {
    e.preventDefault();
    let name = this.refs.name;
    let description = this.refs.description;
    $.ajax({
      url: '/Products',
      type: 'POST',
      data: { Product: {name: name.value, description: description.value } },
      dataType: 'JSON',
    }).success( Product => {
      this.props.addProduct(Product);
    }).error( errors => {
      alert(errors)
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
          <button className="btn">Add</button>
        </form>
      </div>
    );
  }
}