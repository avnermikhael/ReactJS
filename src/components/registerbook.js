import React from "react";
import { useForm } from "react-hook-form";
import { Form, Label } from "reactstrap";
// import "../../src/formcss.css";
import axios from "axios";

//classname="px-2"

export default function App() {
  const { register, errors, handleSubmit } = useForm({});
  const onSubmit = async data => {
    axios
      .post(`http://localhost:3000/books`, { data })
      .then(alert("Book added!"));
    document.getElementById("registerbookform").reset();
  };

  return (
    <div class="card-container">
      <h4>Register New Book</h4>
      <Form
        onSubmit={e => e.preventDefault()}
        id="registerbookform"
        className="px-3 pb-4"
      >
        <div className="form-group">
          <Label for="titlelabel">Title</Label>
          <input
            type="text"
            placeholder="Book title"
            name="title"
            ref={register({
              required: "Username required!"
            })}
            onClick="this.value=''"
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="form-group">
          <label for="authorlabel">Author</label>
          <input
            type="text"
            placeholder="Author name"
            name="author"
            ref={register({
              required: "Author required!"
            })}
            onClick="this.value=''"
          />
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <div className="form-group">
          <label for="pagelabel">Page</label>
          <input
            type="number"
            placeholder="Book page"
            name="page"
            ref={register({
              required: "Page required!"
            })}
            onClick="this.value=''"
          />
          {errors.page && <p>{errors.page.message}</p>}
        </div>
        <div className="form-group">
          <label for="languagelabel">Language</label>
          <input
            type="text"
            placeholder="Book language"
            name="language"
            ref={register({
              required: "Language required!"
            })}
            onClick="this.value=''"
          />
          {errors.language && <p>{errors.language.message}</p>}
        </div>
        <div className="form-group">
          <label for="publisheridlabel">Publisher ID</label>
          <input
            type="number"
            placeholder="Publisher ID"
            name="publisher_id"
            ref={register({
              required: "Pulisher ID required!"
            })}
            onClick="this.value=''"
          />
          {errors.publisher_id && <p>{errors.publisher_id.message}</p>}
        </div>
        <input type="submit" onClick={handleSubmit(onSubmit)} />
      </Form>
    </div>
  );
}
