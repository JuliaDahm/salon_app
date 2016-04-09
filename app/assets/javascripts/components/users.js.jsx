class Users extends React.Component{
  constructor(props) {
    super(props);
    this.state = { users: this.props.users };
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(id, user) {
    $.ajax({
      url: `/users/${id}`,
      type: 'PUT',
      data: { user: {...user}},
      dataType: 'JSON'
    }).success( user => {
      let users = this.state.users;
      let editUser = users.find( b => b.id === user.id)
      debugger;
      editUser.name = user.name;
      editUser.email = user.email;
      editUser.employee = user.employee;
      editUser.password = user.password;
      editUser.present = user.present;
      setState({ users: users });
    });
  }

  render() {
    debugger;
    let users = [];
    if(this.state.users){
      users = this.state.users.map( user => {
        return(<User key={`user-${user.id}`} {...user} updateUser={this.updateUser} />);
      });
    }
    return(
      <div className="row">
        <h2 className="center">Employees</h2>
        {users}
      </div>
    );
  }
}