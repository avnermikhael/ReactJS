import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "http://localhost:8080/inactivecomments";
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  function onDelete(id) {
    axios
      .delete(`http://localhost:8080/comments/${id}`)
      .then(alert("Comment deleted!"));
    window.location.reload(false);
  }

  function onApprove(id) {
    axios
      .request({
        method: "put",
        url: `http://localhost:8080/comments/${id}`
      })
      .then(alert("Comment posted!"));
    window.location.reload(false);
  }

  const renderTable = () => {
    return data.data.map(comment => {
      return (
        <tr key={comment.id}>
          <td>{comment.id}</td>
          <td>{comment.user.username}</td>
          <td>{comment.content}</td>
          <td>
            <button
              className="button btn-success btn-sm btn-block mb-2"
              onClick={() => onApprove(comment.id)}
            >
              Approve
            </button>
            <button
              className="button btn-danger btn-sm btn-block"
              onClick={() => onDelete(comment.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="table-container">
      <h5>Pending Comments</h5>

      <div className="col-md-3">
        <input
          type="text"
          className="search form-control mb-3"
          placeholder="Search Comments"
        />
      </div>

      <table className="table table-bordered" id="articletable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
