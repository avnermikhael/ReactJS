import React, { useEffect, useState, useCallback } from "react";
import Axios from "axios";

//classname="px-2"

const url = "http://localhost:3000/books/";

const [data, setData] = useState({
  error: "",
  data: {
    id: "",
    title: "",
    author: "",
    page: "",
    language: "",
    publisher_id: "",
    createdAt: "",
    updatedAt: ""
  }
});

const showAll = useEffect(() => {
  const id = props.match.params.id;
  Axios.get(`http://localhost:3000/books/${id}`)
    .then(res => {
      // console.log(res.data);
      setData(res.data);
    })
    .catch(err => console.error(err));
}, []);

const handleSubmit = submit(e => {
  e.preventDefault();
  const id = props.match.params.id;
  Axios.put(url + id, data)
    .then(res => {
      props.history.push("/axios");
    })
    .catch(err => console.error(err));
});

function handle(e) {
  const newData = { ...data };
  newData[e.target.id] = e.target.value;
  setData(newData);
}

const handleChange = useCallback(
  ({ target: { name, value } }) =>
    setData(data => ({ ...data, error: "", [name]: value })),
  []
);

return {
  handleChange,
  handleSubmit,
  useEffect
};
