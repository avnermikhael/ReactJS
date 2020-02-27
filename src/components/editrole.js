import React, { Component } from "react";
import axios from "axios";

class EditRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        username: "",
        email: "",
        roles: []
      }
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getUserDetails();
  }

  getUserDetails() {
    let userId = this.props.match.params.id;
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then(response => {
        this.setState(
          {
            name: response.data.data.name,
            username: response.data.data.username,
            email: response.data.data.email,
            roles: response.data.data.roles[0].name
            // name: response.data.name
          },
          () => {
            console.log(response.data.data.name);
          }
        );
      })
      .catch(err => console.log(err));
  }

  editUser(newUser) {
    let userId = this.props.match.params.id;
    axios
      .request({
        method: "put",
        url: `http://localhost:8080/users/${userId}`,
        data: newUser
      })
      .then(response => {
        this.props.history.push("/showalluser");
      })
      .catch(err => console.log(err));
    // console.log(newBook);
  }

  onSubmit(e) {
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      roles: ["ADMIN"]
    };
    this.editUser(newUser);
    e.preventDefault();
  }

  // handleInputChange(e) {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  render() {
    return (
      <div class="card-container">
        <h4>Edit Role</h4>
        <form
          // onSubmit={this.onSubmit.bind(this)}
          id="registerbookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <input
              // onChange={this.handleInputChange}
              value={this.state.roles}
              type="text"
              name="role"
              ref="role"
              disabled
            />
          </div>

          {(() => {
            if (this.state.roles == "ADMIN") {
              return (
                <button className="button btn-danger btn-sm btn-block">
                  Revoke Admin
                </button>
              );
            } else {
              return (
                <button
                  className="button btn-warning btn-sm btn-block"
                  onClick={() => this.onSubmit.bind(this)}
                >
                  Make Admin
                </button>
              );
            }
          })()}
        </form>
      </div>
    );
  }
}

export default EditRole;
