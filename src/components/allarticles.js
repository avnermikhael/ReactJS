import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const url = "http://localhost:8080/activearticles";
  const [data, setData] = useState({ data: [] });
  const role = localStorage.getItem("jwtRole");

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);

  function onDelete(id) {
    axios
      .delete(`http://localhost:8080/articles/${id}`)
      .then(alert("Article deleted!"));
    window.location.reload();
  }

  function onSuspend(id) {
    axios
      .request({
        method: "put",
        url: `http://localhost:8080/suspendarticles/${id}`
      })
      .then(alert("Article Suspended!"));
    window.location.reload(false);
  }

  const renderTable = () => {
    return data.data.map(article => {
      return (
        <tr key={article.id}>
          <td>
            {article.title} <br /> by: <b>{article.user.username}</b>
          </td>
          <td id="textlimit">{article.content}</td>
          <td>
            {(() => {
              if (role === "true") {
                return (
                  <>
                    <Link to={"/viewarticle/" + article.id}>
                      <button className="button btn-info btn-sm btn-block mb-2">
                        Read
                      </button>
                    </Link>

                    <button
                      className="button btn-warning btn-sm btn-block mb-2"
                      onClick={() => onSuspend(article.id)}
                    >
                      Suspend
                    </button>

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

      <table className="table" id="articletable">
        <thead></thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
