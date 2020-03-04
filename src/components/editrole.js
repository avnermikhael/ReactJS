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
            console.log(response.data.data.status);
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
      .then(this.props.history.push("/showalluser"))
      .catch(err => console.log(err));
  }

  changeStatus(e) {
    if (this.state.status === false) {
      const newUser = {
        status: true
      };
      this.editUser(newUser);
    } else {
      const newUser = {
        status: false
      };
      this.editUser(newUser);
    }
    e.preventDefault();
  }

  render() {
    return (
      <div class="card-container">
        <h4>User Status</h4>
        <form
          onSubmit={this.changeStatus.bind(this)}
          id="registerbookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <input
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
          <input
            type="submit"
            value="Change Status"
            className="button btn-primary btn-sm btn-block"
          />
        </form>
      </div>
    );
  }
}

export default EditRole;
