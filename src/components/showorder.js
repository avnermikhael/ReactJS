import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "http://localhost:8080/orders/";

  const [data, setData] = useState([]);
  const user_id = localStorage.getItem("jwtId");

  useEffect(() => {
    axios
      .get(url + user_id)
      .then(response => setData(response.data.data.books));
  }, []);

  //   console.log(data);

  const renderTable = () => {
    return data.map(book => {
      return (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.page}</td>
          <td>{book.language}</td>
          <td>{book.publisher_id}</td>
        </tr>
      );
    });
  };

  return (
    <div className="table-container">
      <h5>Your Order</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Page</th>
            <th>Language</th>
            <th>Publisher ID</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
