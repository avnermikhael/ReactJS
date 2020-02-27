import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

function App() {
  const url = "http://localhost:8080/books";

  const [data, setData] = useState({ data: [] });
  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  function onDelete(id) {
    axios
      .delete(`http://localhost:8080/books/${id}`)
      .then(alert("Book deleted!"));
    window.location.reload(false);
  }

  function addOrder(id_buku) {
    const id_user = localStorage.getItem("jwtId");

    axios
      .post(`http://localhost:8080/orders/` + id_buku + "/" + id_user)
      .then(alert("Book Rented!"));
    window.location.replace("/showorder");
  }

  const role = localStorage.getItem("jwtRole");

  const renderTable = () => {
    return data.data.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.page}</td>
          <td>{book.language}</td>
          <td>{book.publisher_id}</td>
          <td>
            {(() => {
              if (role == "ADMIN") {
                return (
                  <>
                    <Link to={"/updatebook/" + book.id}>
                      <button className="button btn-warning btn-sm btn-block">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="button btn-danger btn-sm btn-block"
                      onClick={() => onDelete(book.id)}
                    >
                      Delete
                    </button>
                  </>
                );
              } else {
                return (
                  // <Link to={"/addorder/" + book.id}>
                  <button
                    className="button btn-warning btn-sm btn-block"
                    onClick={() => addOrder(book.id)}
                  >
                    Rent
                  </button>
                  // </Link>
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
      <h5>Books</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>

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
