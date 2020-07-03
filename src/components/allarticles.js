import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  // const userId = localStorage.getItem("jwtId");

  const url = "http://localhost:8080/activities";
  // const url2 = `http://localhost:8080/article/${userId}`;

  // const role = localStorage.getItem("jwtRole");

  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
    // console.log(data);
  }, []);

  // function onDelete(id) {
  //   axios
  //     .delete(`http://localhost:8080/articles/${id}`)
  //     .then(alert("Article deleted!"));
  //   window.location.reload();
  // }

  const renderTable = () => {
    return data.data.map(activity => {
      return (
        <tr key={activity.id}>
          <td> {activity.date}</td>
          <td> {activity.activity} </td>
          <td> {activity.duration} </td>
          <td> {activity.details} </td>
          <td> {activity.weight} </td>
          <td>
            {/* <Link to={"/updatearticle/" + article.id}> */}
            <button className="button btn-info btn-sm btn-block mb-2">
              Edit
            </button>
            {/* </Link> */}
            <button
              className="button btn-danger btn-sm btn-block"
              // onClick={() => onDelete(article.id)}
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
      {/* {console.log(data.data[0])} */}
      {(() => {
        if (data.data[0]) {
          return (
            <>
              <h5>Kegiatan</h5>

              <table className="table" id="commontable">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Jenis Kegiatan</th>
                    <th>Durasi</th>
                    <th>Keterangan</th>
                    <th>Berat Badan</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
              </table>
            </>
          );
        } else {
          return <h1>Belum ada kegiatan</h1>;
        }
      })()}
    </div>
  );
}

export default App;
