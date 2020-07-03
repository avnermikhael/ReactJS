import React, { Component } from "react";
import axios from "axios";

class EditActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      activity: "",
      duration: "",
      details: "",
      weight: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getActivityDetails();
  }

  getActivityDetails() {
    let activityId = this.props.match.params.id;
    axios
      .get(`http://localhost:8080/activity/${activityId}`)
      .then(response => {
        this.setState(
          {
            date: response.data.data[0].date,
            activity: response.data.data[0].activity,
            duration: response.data.data[0].duration,
            details: response.data.data[0].details,
            weight: response.data.data[0].weight
          },
          () => {
            // console.log(moment(this.state.date).format("YYYY/MM/DD"));
          }
        );
      })
      .catch(err => console.log(err));
  }

  editActivity(newActivity) {
    let activityId = this.props.match.params.id;
    axios
      .request({
        method: "put",
        url: `http://localhost:8080/updateactivity/${activityId}`,
        data: newActivity
      })
      .then(response => {
        this.props.history.push("/allarticles");
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    const newActivity = {
      date: this.refs.date.value,
      activity: this.refs.activity.value,
      duration: this.refs.duration.value,
      details: this.refs.details.value,
      weight: this.refs.weight.value
    };
    this.editActivity(newActivity);
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
        <h4>Update Activity</h4>
        <form
          onSubmit={this.onSubmit.bind(this)}
          id="registerbookform"
          className="px-3 pb-4"
        >
          <div className="form-group">
            <label for="datelabel">Tanggal</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.date}
              type="date"
              name="date"
              ref="date"
            />
          </div>

          <div className="form-group">
            <label for="activitylabel">Aktifitas</label>
            <select
              name="activity"
              ref="activity"
              onChange={this.handleInputChange}
              value={this.state.activity}
            >
              <option value="Tidur">Tidur</option>
              <option value="Makan">Makan</option>
              <option value="Olahraga">Olahraga</option>
              <option value="Aktifitas Lain">Aktifitas Lain</option>
            </select>
          </div>

          <div className="form-group">
            <label for="durationlabel">Durasi</label>
            <input
              type="number"
              value={this.state.duration}
              name="duration"
              ref="duration"
              onChange={this.handleInputChange}
              // onClick="this.value=''"
            />
          </div>
          <div className="form-group">
            <label for="detailslabel">Keterangan</label>
            <input
              type="text"
              value={this.state.details}
              name="details"
              ref="details"
              onChange={this.handleInputChange}
              // onClick="this.value=''"
            />
          </div>
          <div className="form-group">
            <label for="weightlabel">Berat Badan</label>
            <input
              type="number"
              step=".01"
              value={this.state.weight}
              name="weight"
              ref="weight"
              onChange={this.handleInputChange}
              // onClick="this.value=''"
            />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default EditActivity;
