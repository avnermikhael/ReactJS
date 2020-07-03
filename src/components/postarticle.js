import React, { Component } from "react";
import axios from "axios";
// import { FormGroup } from "reactstrap";

class PostArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // content: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  postArticle(newActivity) {
    // const userId = localStorage.getItem("jwtId");
    console.log(newActivity);
    axios
      .post(`http://localhost:8080/addactivity`, { newActivity })
      .then(alert("Activity posted!"));
    window.location("/allarticles");
  }

  onSubmit(e) {
    const newActivity = {
      date: this.refs.date.value,
      activity: this.refs.activity.value,
      duration: this.refs.duration.value,
      details: this.refs.details.value,
      weight: this.refs.detail.value
    };
    console.log(newActivity);
    this.postArticle(newActivity);
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
        <h4>Masukkan Kegiatan Baru</h4>
        <form
          onSubmit={this.onSubmit.bind(this)}
          id="updatebookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="date"
              name="date"
              ref="date"
              placeholder="Tanggal"
            />
          </div>

          <div className="form-group">
            <select name="activity" ref="activity">
              <option value="Tidur">Tidur</option>
              <option value="Makan">Makan</option>
              <option value="Olahraga">Olahraga</option>
              <option value="Aktifitas Lain">Aktifitas Lain</option>
            </select>
          </div>

          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="duration"
              ref="durations"
              placeholder="Durasi"
            />
          </div>

          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="text"
              name="details"
              ref="details"
              placeholder="Keterangan"
            />
          </div>

          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              type="number"
              name="weight"
              ref="weight"
              step=".01"
              placeholder="Berat Badan"
            />
          </div>

          {/* <div className="form-group">
            <textarea
              name="content"
              ref="content"
              onChange={this.handleInputChange}
              value={this.state.content}
              rows="10"
              cols="47"
              placeholder="Write your article"
            />
          </div> */}

          <input type="submit" value="Tambahkan Kegiatan" className="btn" />
        </form>
      </div>
    );
  }
}

export default PostArticle;
