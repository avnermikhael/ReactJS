import React, { Component } from "react";
import axios from "axios";

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      page: "",
      language: "",
      publisher_id: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getBookDetails();
  }

  getBookDetails() {
    let bookId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/books/${bookId}`)
      .then(response => {
        this.setState(
          {
            title: response.data.data.title,
            author: response.data.data.author,
            page: response.data.data.page,
            language: response.data.data.language,
            publisher_id: response.data.data.publisher_id
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  editBook(newBook) {
    let bookId = this.props.match.params.id;
    axios
      .request({
        method: "put",
        url: `http://localhost:3000/books/${bookId}`,
        data: newBook
      })
      .then(response => {
        this.props.history.push("/axios");
      })
      .catch(err => console.log(err));
    // console.log(newBook);
  }

  onSubmit(e) {
    const newBook = {
      title: this.refs.title.value,
      author: this.refs.author.value,
      page: this.refs.page.value,
      language: this.refs.language.value,
      publisher_id: this.refs.publisher_id.value
    };
    this.editBook(newBook);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div class="card-container">
        <h4>Update Book</h4>
        <form
          onSubmit={this.onSubmit.bind(this)}
          id="registerbookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.title}
              type="text"
              name="title"
              ref="title"
            />
          </div>

          <div className="form-group">
            <label for="authorlabel">Author</label>
            <input
              type="text"
              value={this.state.author}
              name="author"
              ref="author"
              onChange={this.handleInputChange}
              onClick="this.value=''"
            />
          </div>
          <div className="form-group">
            <label for="pagelabel">Page</label>
            <input
              type="number"
              value={this.state.page}
              name="page"
              ref="page"
              onChange={this.handleInputChange}
              onClick="this.value=''"
            />
          </div>
          <div className="form-group">
            <label for="languagelabel">Language</label>
            <input
              type="text"
              value={this.state.language}
              name="language"
              ref="language"
              onChange={this.handleInputChange}
              onClick="this.value=''"
            />
          </div>
          <div className="form-group">
            <label for="publisheridlabel">Publisher ID</label>
            <input
              type="number"
              value={this.state.publisher_id}
              name="publisher_id"
              ref="publisher_id"
              onChange={this.handleInputChange}
              onClick="this.value=''"
            />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default EditBook;
