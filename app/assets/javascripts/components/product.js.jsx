class Product extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.showProduct = this.showProduct.bind(this)
    this.state = { edit: false };
  }

  showProduct() {
    window.location.href = `/Products/${this.props.id}/lists`;
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  updateProduct() {
    let Product = { name: this.refs.name.value, description: this.refs.description.value }
    this.toggleEdit();
    this.props.updateProduct(this.props.id, Product);
    $.ajax({
      url: `/Products/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    })
  }

  show() {
    return(
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{ this.props.name }</span>
            <p>{ this.props.description }</p>
          </div>
        if(user.employee) {
          <div className="card-action">
            <button onClick={ () => this.props.delete(this.props.id)} className="btn red">Delete</button>
            <button onClick={this.toggleEdit} className="btn blue">Edit</button>
            <button onClick={this.showProduct} className="btn">Show</button>
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

  edit() {
    return(
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <input placeholder={this.props.name} defaultValue={this.props.name} ref="name" required={true} />
          <input placeholder={this.props.description} defaultValue={this.props.description} ref="description" required={true} />
          <div className="card-action">
            <button onClick={this.toggleEdit} className="btn blue">Cancel</button>
            <button onClick={this.updateProduct} className="btn">Save</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.edit)
      return this.edit();
    else
      return this.show();
  }

}