import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        content: "",
        comments: [
          {
            user: {
              username: ""
            }
          }
        ]
      },
      comment: {
        content: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getArticleDetails();
  }

  getArticleDetails() {
    let articleId = this.props.match.params.id;
    axios
      .get(`http://localhost:8080/comments/${articleId}`)
      .then(response => {
        this.setState(
          {
            article: {
              title: response.data.data.title,
              content: response.data.data.content,
              comments: response.data.data.comments
            }
          },
          () => {
            console.log(this.state.article);
          }
        );
      })
      .catch(err => console.log(err));
  }

  onDelete(e, id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/comments/${id}`)
      .then(alert("Comment deleted!"));
    window.location.reload();
  }

  onPost(e) {
    e.preventDefault();
    const newComment = {
      content: this.refs.content.value
    };
    this.postComment(newComment);
  }

  postComment(newComment) {
    const userId = localStorage.getItem("jwtId");
    const articleId = this.props.match.params.id;

    axios
      .post(`http://localhost:8080/comments/${userId}/${articleId}`, {
        newComment
      })
      .then(alert("New Comment added, awaiting admin review"));
    window.location.reload();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      comment: {
        [name]: value
      }
    });
  }

  render() {
    return (
      <>
        <div class="article-title mx-2">{this.state.article.title}</div>
        <div class="article-content mx-2">{this.state.article.content}</div>
        <div class="comment-title mx-2">Comments</div>

        {this.state.article.comments.map(comments => {
          return (
            <>
              <div class="comment-content">
                From:<b> {comments.user.username} </b> <br />
                {comments.content}
                {(() => {
                  const role = localStorage.getItem("jwtRole");
                  const userId = localStorage.getItem("jwtId");

                  if (
                    String(comments.userId) === String(userId) ||
                    role === "true"
                  ) {
                    return (
                      <>
                        <br />
                        <button
                          className="button-red btn-sm mx-0"
                          onClick={e => this.onDelete(e, comments.id)}
                        >
                          Delete Comment
                        </button>
                      </>
                    );
                  }
                })()}
              </div>
              <br></br>
            </>
          );
        })}

        {(() => {
          const role = localStorage.getItem("jwtRole");

          if (role) {
            return (
              <>
                {/* <Link to={"/postcomment/" + articleId}>
                  <button className="button btn-success btn-sm btn-block mb-3">
                    Post Comment
                  </button>
                </Link> */}

                <div>
                  <form id="postcomment" className="px-3 pb-3">
                    <div className="form-group">
                      <textarea
                        name="content"
                        ref="content"
                        onChange={this.handleInputChange}
                        value={this.state.comment.content}
                        // rows="40"
                        cols="50"
                        placeholder="Write your comment"
                        minlength="5"
                        maxLength="100"
                        className="pb-5"
                      />
                    </div>
                    <button
                      className="button btn-info btn-sm btn-block"
                      onClick={e => this.onPost(e)}
                    >
                      Post Comment
                    </button>
                  </form>
                </div>

                <button
                  className="button btn-warning btn-sm btn-block"
                  onClick={this.props.history.goBack}
                >
                  Return
                </button>
              </>
            );
          } else {
            return (
              <button
                className="button btn-warning btn-sm btn-block"
                onClick={this.props.history.goBack}
              >
                Return
              </button>
            );
          }
        })()}
      </>
    );
  }
}

export default ViewArticle;
