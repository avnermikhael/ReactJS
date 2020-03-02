import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

function App() {
  const userId = localStorage.getItem("jwtId");

  const url = "http://localhost:8080/articles";
  const url2 = `http://localhost:8080/article/${userId}`;
  const url3 = "http://localhost:8080/activearticles";

  const role = localStorage.getItem("jwtRole");

  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    if (role === "true") {
      axios.get(url).then(json => setData(json.data));
    } else if (role === "false") {
      axios.get(url2).then(json => setData(json.data));
    } else {
      axios.get(url3).then(json => setData(json.data));
    }
  }, []);

  function onDelete(id) {
    axios
      .delete(`http://localhost:8080/articles/${id}`)
      .then(alert("Article deleted!"));
    window.location.reload(false);
  }

  const renderTable = () => {
    return data.data.map(article => {
      if (article.userId === localStorage.getItem("jwtId")) {
      }

      return (
        <tr key={article.id}>
          <td>{article.id}</td>
          <td>{article.title}</td>
          <td>{article.content}</td>
          <td>
            {(() => {
              if (article.status === true) {
                return "Active";
              } else {
                return "Inactive / Awaiting Admin Review";
              }
            })()}
          </td>

          <td>
            {(() => {
              if (role === "true") {
                return (
                  <>
                    <Link to={"/updatearticle/" + article.id}>
                      <button className="button btn-warning btn-sm btn-block mb-2">
                        Review
                      </button>
                    </Link>
                    <button
                      className="button btn-danger btn-sm btn-block"
                      onClick={() => onDelete(article.id)}
                    >
                      Delete
                    </button>
                  </>
                );
              } else {
                return (
                  <Link to={"/viewarticle/" + article.id}>
                    <button className="button btn-warning btn-sm btn-block">
                      View Article
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
      <h5>Articles</h5>

      <div className="col-md-2">
        <input
          type="text"
          className="search form-control mb-3"
          placeholder="Search Article"
        />
      </div>

      <table className="table table-bordered" id="articletable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
