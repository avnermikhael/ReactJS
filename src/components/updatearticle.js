import React, { Component } from "react";
import axios from "axios";

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      status: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getArticleDetails();
  }

  getArticleDetails() {
    let articleId = this.props.match.params.id;
    axios
      .get(`http://localhost:8080/articles/${articleId}`)
      .then(response => {
        this.setState(
          {
            title: response.data.data.title,
            content: response.data.data.content,
            status: response.data.data.status
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  editArticle(newArticle) {
    let articleId = this.props.match.params.id;
    axios
      .request({
        method: "put",
        url: `http://localhost:8080/articles/${articleId}`,
        data: newArticle
      })
      .then(window.location.replace("/axios"))
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    const newArticle = {
      status: true
    };
    this.editArticle(newArticle);
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
        <h4>Review Article</h4>
        <form
          onSubmit={this.onSubmit.bind(this)}
          id="updatebookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.title}
              type="text"
              name="title"
              ref="title"
              readOnly
            />
          </div>

          <div className="form-group">
            <textarea
              name="content"
              ref="content"
              value={this.state.content}
              rows="10"
              cols="50"
              readOnly
            />
          </div>
          <input type="submit" id="submit" value="Publish Article" />
        </form>
        <button
          className="button btn-info btn-m  btn-block"
          onClick={this.props.history.goBack}
        >
          Return
        </button>
      </div>
    );
  }
}

export default EditArticle;
