import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const url = "http://localhost:8080/users";

  const [data, setData] = useState({ data: [] });
  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  const role_id = localStorage.getItem("jwtId");

  const renderTable = () => {
    return data.data.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            {(() => {
              if (role_id == user.id) {
                return (
                  <Link to={"/editrole/" + user.id}>
                    <button
                      className="button btn-danger btn-sm btn-block"
                      disabled
                    >
                      Role Locked
                    </button>
                  </Link>
                );
              } else {
                return (
                  <Link to={"/editrole/" + user.id}>
                    <button className="button btn-warning btn-sm btn-block">
                      Edit Role
                    </button>
                  </Link>
                );
              }
            })()}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="table-container">
      <h5>Users</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
