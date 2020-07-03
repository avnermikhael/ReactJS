import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const url = "http://localhost:8080/activities";

  const [data, setData] = useState({ data: [] });

  const [filtered, setFiltered] = useState({ data: [] });
  const [result, setResult] = useState("");

  // useEffect(() => {
  //   axios.get(url).then(json => setData(json.data), setFiltered(json.data));
  //   // console.log(data);
  // }, []);

  useMemo(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: url
      });
      setData(result.data);
      setFiltered(result.data);
    };
    try {
      fetchData();
    } catch (err) {
      alert(err);
    }
  }, []);

  useEffect(() => {
    const results = filtered.data.filter(res =>
      res.activity.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);

  const onChange = e => {
    setResult(e.target.value);
  };

  function onDelete(id) {
    axios
      .delete(`http://localhost:8080/activity/${id}`)
      .then(alert("Activity deleted!"));
    window.location.reload();
  }

  const renderTable = () => {
    return filtered.data.map(activity => {
      return (
        <tr key={activity.id}>
          <td> {activity.date}</td>
          <td> {activity.activity} </td>
          <td> {activity.duration} </td>
          <td> {activity.details} </td>
          <td> {activity.weight} </td>
          <td>
            <Link to={"/updatearticle/" + activity.id}>
              <button className="button btn-info btn-sm btn-block mb-2">
                Edit
              </button>
            </Link>
            <button
              className="button btn-danger btn-sm btn-block"
              onClick={() => onDelete(activity.id)}
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
        if (filtered.data[0]) {
          return (
            <>
              <h5>Kegiatan</h5>

              <div>
                <form className="px-3 pb-4">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  {/* <label> Jenis Kegiatan </label> */}
                  <input
                    className="form-control form-control-sm w-50 px-4 mb-2"
                    type="text"
                    value={result}
                    onChange={onChange}
                    placeholder="Cari Jenis Kegiatan"
                    aria-label="Search"
                  />

                  {/* <input
                    className="form-control form-control-sm w-50 px-4 mb-2"
                    type="text"
                    value={result}
                    onChange={onChange}
                    placeholder="Durasi (Menit)"
                    aria-label="Search"
                  />

                  <input
                    className="form-control-sm w-50 px-4 mb-2"
                    type="text"
                    value={result}
                    onChange={onChange}
                    placeholder="Tanggal"
                    aria-label="Search"
                  />
                  <h6 className="form-control-sm w-50"> s/d </h6>
                  <input
                    className="form-control form-control-sm w-50 px-4 mb-2"
                    type="text"
                    value={result}
                    onChange={onChange}
                    placeholder="Tanggal"
                    aria-label="Search"
                  /> */}
                </form>
              </div>

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
                <button
                  className="button btn-secondary btn-sm btn-block ml-3"
                  onClick={() => window.print()}
                >
                  Cetak Halaman
                </button>
              </table>
            </>
          );
        } else {
          return <h4>Belum ada kegiatan</h4>;
        }
      })()}
    </div>
  );
}

export default App;
