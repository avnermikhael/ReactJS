import React, { Component } from "react";
import axios from "axios";

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [{ date: "", activity: "", duration: "", details: "", weight: "" }],
      searchString: "",
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange(e) {
    var value = e.target.value;
    this.setState({
      searchString: value,
      filtered: this.state.data.filter(e =>
        Object.values(e)
          .join(" ")
          .toLowerCase()
          .match(value)
      )
    });
  }

  fetchData() {
    axios
      .get(`http://localhost:8080/activities`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json,
          filtered: json
        });
      })
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    var { isLoaded, data } = this.state;
    const searchString = this.state.searchString.trim().toLowerCase();
    let text = this.state.data;
    console.log(text);
    if (searchString.length > 0) {
      text = text.filter(info => {
        return info.activity.toLowerCase().match(searchString);
      });
    }
    return (
      <div>
        <select
          className="category-select"
          name="activities"
          onChange={this.handleChange}
        >
          {data.map(info => (
            <option value={info.activity}>{info.activity}</option>
          ))}
        </select>

        <input
          type="number"
          id="searchbar"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="duration"
          name="duration"
        />

        {/* map through the filtered ones*/}
        {this.state.filtered.map(info => (
          <div className="display">
            <span className="role">Activity: {info.activity}</span>
            <span> Duration: {info.duration}</span>
            <span> Details: {info.details}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Activities;
