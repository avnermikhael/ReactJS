import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const userId = localStorage.getItem("jwtId");

  const url = "http://localhost:8080/articles";
  const url2 = `http://localhost:8080/article/${userId}`;

  const role = localStorage.getItem("jwtRole");

  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    if (role === "true") {
      axios.get(url).then(json => setData(json.data));
      console.log(data);
    } else {
      axios.get(url2).then(json => setData(json.data));
      console.log(data);
    }
  }, []);

  function onDelete(id) {
    axios
      .delete(`http://localhost:8080/articles/${id}`)
      .then(alert("Article deleted!"));
    window.location.reload();
  }

  const renderTable = () => {
    return data.data.map(article => {
      return (
        <tr key={article.id}>
          {(() => {
            if (role === "true") {
              return (
                <td>
                  {article.title} <br /> by: <b>{article.user.username}</b>
                </td>
              );
            } else {
              return <td>{article.title}</td>;
            }
          })()}

          <td id="textlimit">{article.content}</td>
          <td>
            {(() => {
              if (article.status === true) {
                return <span class="badge badge-success">Active</span>;
              } else {
                return (
                  <span class="badge badge-danger">
                    "Inactive / Awaiting Admin Review"
                  </span>
                );
              }
            })()}
          </td>

          <td>
            {(() => {
              if (role === "true") {
                return (
                  <>
                    <Link to={"/updatearticle/" + article.id}>
                      <button className="button btn-info btn-sm btn-block mb-2">
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
                    <button className="button btn-info btn-sm btn-block">
                      Read
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
      {/* {console.log(data.data[0])} */}
      {(() => {
        if (data.data[0]) {
          return (
            <>
              <h5>Articles</h5>

              <div className="col-md-2">
                <input
                  type="text"
                  className="search form-control mb-3"
                  placeholder="Search Article"
                />
              </div>

              <table className="table" id="commontable">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
              </table>
            </>
          );
        } else {
          return <h1>No Article Created Yet</h1>;
        }
      })()}
    </div>
  );
}

export default App;
