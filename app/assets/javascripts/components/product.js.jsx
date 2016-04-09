class Product extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.showProduct = this.showProduct.bind(this)
    this.state = { edit: false };
    this.submitUpdate = this.submitUpdate.bind(this)
  }

  showProduct() {
    window.location.href = `/Products/${this.props.id}/lists`;
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  show() {
    return(
      <div className="col s12 m4">
        <div className="card light-blue darken-4">
          <div className="card-content white-text">
            <span className="card-title">Name: { this.props.name }</span>
            <p>Description: { this.props.description }</p>
            <p>Price: ${ this.props.price }</p>
            <p>Quantity: { this.props.quantity }</p>
          </div>
        if(this.props.current_user) {
          <div className="card-action">
            <button onClick={ () => this.props.delete(this.props.id)} className="btn red">Delete</button>
            <button onClick={this.toggleEdit} className="btn blue">Edit</button>
          </div>
        } else{
          <div className="card-action">
            <button onClick={this.showProduct} className="btn">Show</button>
            <button onClick={this.buyProduct} className="btn green darken-2">Buy</button>
          </div>
        }
        </div>
      </div>
    );
  }

  submitUpdate() {
    let product = { id: this.props.id,
                    name: this.refs.name.value,
                    description: this.refs.description.value,
                    price: this.refs.price.value,
                    quantity: this.refs.quantity.value
                  }
    this.props.updateProduct(product)
  }

  edit() {
    if (this.props.current_user){
      return(
        <div className="col s12 m4">
          <div className="card light-blue darken-4 card-content white-text">
            <p className="edit-form">Name: <input placeholder={this.props.name} defaultValue={this.props.name} ref="name" required={true} /> </p>
            <p className="edit-form">Description: <input placeholder={this.props.description} defaultValue={this.props.description} ref="description" required={true} /> </p>
            <p className="edit-form">Price: <input placeholder={this.props.price} defaultValue={this.props.price} ref="price" required={true} /> </p>
            <p className="edit-form">Quantity: <input placeholder={this.props.quantity} defaultValue={this.props.quantity} ref="quantity" required={true} /> </p>
            <div className="card-action">
              <button onClick={this.toggleEdit} className="btn blue">Cancel</button>
              <button onClick={this.submitUpdate} className="btn">Save</button>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.state.edit)
      return this.edit();
    else
      return this.show();
  }

}