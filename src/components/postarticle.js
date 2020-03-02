import React, { Component } from "react";
import axios from "axios";

class PostArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  postArticle(newArticle) {
    const userId = localStorage.getItem("jwtId");
    axios
      .post(`http://localhost:8080/articles/${userId}`, { newArticle })
      .then(alert("Article posted, awaiting admin review"));
    window.location.reload();
  }

  onSubmit(e) {
    const newArticle = {
      title: this.refs.title.value,
      content: this.refs.content.value
    };
    this.postArticle(newArticle);
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
        <h4>Post New Article</h4>
        <form
          onSubmit={this.onSubmit.bind(this)}
          id="updatebookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="title"
              ref="title"
            />
          </div>

          <div className="form-group">
            <textarea
              name="content"
              ref="content"
              onChange={this.handleInputChange}
              value={this.state.content}
              rows="10"
              cols="50"
            />
          </div>
          <input type="submit" value="Publish Article" className="btn" />
        </form>
      </div>
    );
  }
}

export default PostArticle;
