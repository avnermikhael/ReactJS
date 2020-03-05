import React, { Component } from "react";
import axios from "axios";
// import { FormGroup } from "reactstrap";

class PostFullArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        content: ""
      },
      upload: {
        uploading: false,
        images: []
      }
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateFile(e) {
    const files = Array.from(e.target.files);
    this.setState({ upload: { uploading: true } });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });
  }

  postArticle(newArticle, newImage) {
    const userId = localStorage.getItem("jwtId");
    console.log(newImage);
    // data.append("file", newImage.file);
    // axios.post(`http://localhost:8080/articles/${userId}`, { newArticle });
    axios
      .post(`http://localhost:8080/upload`, newImage)

      .then(alert("Article posted, awaiting admin review"));
    // window.location.reload();
  }

  onSubmit(e) {
    const newArticle = {
      title: this.refs.title.value,
      content: this.refs.content.value
    };
    const newImage = {
      file: this.refs.image.file
    };

    this.postArticle(newArticle, newImage);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      article: {
        [name]: value
      }
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
              placeholder="Title"
            />
          </div>

          <div className="form-group">
            <textarea
              name="content"
              ref="content"
              onChange={this.handleInputChange}
              value={this.state.content}
              rows="10"
              cols="47"
              placeholder="Write your article"
            />
          </div>

          <div className="form-group">
            <input
              type="file"
              name="image"
              className="form-control-file"
              ref="image"
              onChange={this.updateFile}
            />
          </div>

          <input type="submit" value="Publish Article" className="btn" />
        </form>
      </div>
    );
  }
}

export default PostFullArticle;
