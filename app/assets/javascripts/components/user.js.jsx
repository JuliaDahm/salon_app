class User extends React.Component {
  constructor(props) {
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.showUser = this.showUser.bind(this)
    this.state = { edit: false };
  }

  showUser() {
    window.location.href = `/Products/${this.props.id}/lists`;
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }


  show() {
    let x
    let user = this.props
    if (user.employee) {
     if(user.employee && user.present) {
      x = (<div className="card-action">
            <button onClick={this.toggleEdit} className="btn blue">Edit</button>
            <p>Employee and working</p>
          </div>)
        } else if (user.employee) {
          x = (<div className="card-action">
            <button onClick={this.toggleEdit} className="btn blue">Edit</button>
            <p>Employee but not present</p>
          </div>)
        } else {
          x = (<div className = 'normalemp'>
            <p>Customer</p>
          </div>)
        }
      return(     
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.name}</span>
            <p>{this.props.email}</p>
            <input type="checkbox" value={this.props.employee}/> 
          </div>
          {x}
        </div>
      </div>
      );

    } //  else {
    //   let y 

    //   if(user.employee && user.present) {
    //     y=(<div className="card-action">
    //         <p>Working right now</p>
    //       </div>)
    //     }
    //   return(
    //   <div className="col s12 m4">
    //     <div className="card blue-grey darken-1">
    //       <div className="card-content white-text">
    //         <span className="card-title">{this.props.name}</span>
    //         <p>{this.props.email}</p>
    //       </div>
    //       {y}
    //     </div>
    //   </div>
    // }
    
  }

  edit() {
    return(
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <input placeholder={this.props.name} defaultValue={this.props.name} ref="name" required={true} />
          <input placeholder={this.props.email} defaultValue={this.props.email} ref="email"/>
          <input type='checkbox' defaultValue={this.props.employee} ref ="employee"/>
          <input type='checkbox' defaultValue={this.props.present} ref ="employee"/>

          <div className="card-action">
            <button onClick={this.toggleEdit} className="btn blue">Cancel</button>
            <button onClick={this.updateUser} className="btn">Save</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    debugger;
    if (this.state.edit)
      return this.edit();
    else
      return this.show();

  }

}