import React, { Component } from "react";
import axios from "axios";

class PostArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  postArticle(newArticle) {
    // const userId = localStorage.getItem("jwtId");
    // axios
    //   .post(`http://localhost:8080/articles/${userId}`, { newArticle })
    //   .then(alert("Article posted, awaiting admin review"));
    console.log(newArticle);
  }

  onSubmit(e) {
    const newArticle = {
      status: true
    };
    this.postArticle(newArticle);
    e.preventDefault();
  }

  //   handleInputChange(e) {
  //     const target = e.target;
  //     const value = target.value;
  //     const name = target.name;

  //     this.setState({
  //       [name]: value
  //     });
  //   }

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
              //   onChange={this.handleInputChange}
              type="text"
              name="title"
              ref="title"
            />
          </div>

          <div className="form-group">
            <textarea
              name="content"
              ref="content"
              value={this.state.value}
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
