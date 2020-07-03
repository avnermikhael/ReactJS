import React, { useState, useEffect } from "react";
import axios from "axios";

import { Bar, Pie, Line } from "react-chartjs-2";

function App() {
  const url = "http://localhost:8080/activities";

  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
    console.log(data);
  }, []);

  const chart1 = {
    labels: ["Tidur", "Makan", "Olahraga", "Aktifitas lain"],
    datasets: [
      {
        label: "Grafik 3",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [16, 4, 2, 26]
      }
    ]
  };

  const chart2 = {
    labels: ["Tidur", "Makan", "Olahraga", "Aktifitas Lain"],
    datasets: [
      {
        data: [8, 2, 1, 13],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };

  const chart3 = {
    labels: [
      "01/03/20",
      "02/03/20",
      "03/03/20",
      "04/03/20",
      "05/03/20",
      "06/03/20",
      "07/03/20",
      "08/03/20"
    ],
    datasets: [
      {
        // label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [72, 71, 73, 68, 67, 67, 68, 67]
      }
    ]
  };

  return (
    <div className="mt-3">
      <h3> </h3>
      <Line
        data={chart3}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: true
        }}
      />

      <Pie
        data={chart2}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: true
        }}
      />

      <Bar
        data={chart1}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: true
        }}
      />
    </div>

    // <div className="table-container">
    //   {/* {console.log(data.data[0])} */}
    //   {(() => {
    //     if (data.data[0]) {
    //       return (
    //         <>
    //           <h5>Kegiatan</h5>
    //           <table className="table" id="commontable">
    //             <thead>
    //               <tr>
    //                 <th>Tanggal</th>
    //                 <th>Jenis Kegiatan</th>
    //                 <th>Durasi</th>
    //                 <th>Keterangan</th>
    //                 <th>Berat Badan</th>
    //               </tr>
    //             </thead>
    //             <tbody>{renderTable()}</tbody>
    //           </table>
    //         </>
    //       );
    //     } else {
    //       return <h4>Belum ada kegiatan</h4>;
    //     }
    //   })()}
    // </div>
  );
}

export default App;
