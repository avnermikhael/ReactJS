import React, { Component } from "react";
import axios from "axios";

class PostComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  PostComment(newComment) {
    const userId = localStorage.getItem("jwtId");
    const articleId = this.props.match.params.id;

    axios
      .post(`http://localhost:8080/comments/${userId}/${articleId}`, {
        newComment
      })
      .then(alert("New Comment added, awaiting admin review"));
    window.location.replace("/allarticles");
  }

  onSubmit(e) {
    const newComment = {
      content: this.refs.content.value
    };
    this.PostComment(newComment);
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
        <h4>Comment</h4>
        <form
          onSubmit={this.onSubmit.bind(this)}
          id="postcomment"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <textarea
              name="content"
              ref="content"
              onChange={this.handleInputChange}
              value={this.state.content}
              rows="10"
              cols="50"
              placeholder="Write your comment"
            />
          </div>
          <input type="submit" value="Comment" className="btn" />
        </form>
      </div>
    );
  }
}

export default PostComment;
