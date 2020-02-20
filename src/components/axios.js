// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState({ hits: [] });
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "https://hn.algolia.com/api/v1/search?query=redux"
//       );
//       setData(result.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="card-container">
//       <ul>
//         {data.hits.map(item => (
//           <li key={item.objectID}>
//             <a href={item.url}>{item.title}</a> <span>{item.author}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then(json => setData(json.data));
  }, []);
  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
  };

  return (
    <div class="card-container">
      <h5>Users</h5>
      <table id="users" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
