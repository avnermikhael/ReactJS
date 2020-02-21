import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "http://localhost:3000/books";

  const [data, setData] = useState({ data: [] });
  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  function onDelete(id) {
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(alert("Book deleted!"));
    window.location.reload(false);
  }

  const renderTable = () => {
    return data.data.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.page}</td>
          <td>{book.language}</td>
          <td>{book.publisher_id}</td>
          <td>
            <button className="button btn-warning btn-sm btn-block">
              Edit
            </button>
            <button
              className="button btn-danger btn-sm btn-block"
              onClick={() => onDelete(book.id)}
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
      <h5>Users</h5>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Page</th>
            <th>Language</th>
            <th>Publisher ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
