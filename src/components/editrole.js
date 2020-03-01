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
        admin: ""
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
            status: response.data.data.status
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
    console.log(newUser);
    axios
      .request({
        method: "put",
        url: `http://localhost:8080/users/${userId}`,
        data: newUser
      })
      .then(response => {
        this.props.history.push("/showalluser");
        // window.location.reload();
      })
      .catch(err => console.log(err));
    // console.log(newBook);
  }

  activateUser(e) {
    const newUser = {
      status: true
    };
    console.log(newUser);
    this.editUser(newUser);
    e.preventDefault();
  }

  blockUser(e) {
    const newUser = {
      status: false
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
        <h4>User Status</h4>
        <form
          onSubmit={this.onSubmit.bind(this)}
          id="registerbookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <input
              // onChange={this.handleInputChange}
              value={(() => {
                if (this.state.status === false) {
                  return "Inactive User";
                } else {
                  return "Active User";
                }
              })()}
              type="text"
              name="status"
              ref="status"
              disabled
            />
          </div>

          {(() => {
            if (this.state.status === false) {
              return (
                <button
                  className="button btn-primary btn-sm btn-block"
                  // onClick={() => this.activateUser.bind(this)}
                >
                  Activate User
                </button>
              );
            } else {
              return (
                <button
                  className="button btn-warning btn-sm btn-block"
                  // onClick={() => this.blockUser.bind(this)}
                >
                  Block User
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
