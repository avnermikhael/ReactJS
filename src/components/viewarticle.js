import React, { Component } from "react";
import axios from "axios";

class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      status: ""
    };
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
            content: response.data.data.content
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div class="article-title mx-2">{this.state.title}</div>
        <div class="article-content mx-2">{this.state.content}</div>
        <button
          className="button btn-warning btn-sm btn-block"
          onClick={this.props.history.goBack}
        >
          Return
        </button>
      </>
    );
  }
}

export default ViewArticle;
