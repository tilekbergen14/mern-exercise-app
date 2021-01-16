import React, { Component } from "react";
import axios from "axios";

class AddExercises extends Component {
  state = {
    user: "",
    date: "",
    duration: "",
    description: "",
    users: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
        .then(result => {
            this.setState({
                user: result.data.username,
                date: result.data.date.slice(0, 10),
                duration: result.data.duration,
                description: result.data.description,
            })
        })
        .catch(error => console.log(error.message))
  }

  userHandler = (e) => {
    this.setState({ user: e.target.value });
  };

  descriptionHandler = (e) => {
    this.setState({ description: e.target.value });
  };

  durationHandler = (e) => {
    this.setState({ duration: e.target.value });
  };

  dateHandler = (e) => {
    this.setState({ date: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { user, description, duration, date } = this.state;
    const exercise = {
      username: user,
      date: date,
      duration: duration,
      description: description,
    };
    axios
      .put("http://localhost:5000/exercises/"+this.props.match.params.id, exercise)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));

    window.location = "/"
  };
  render() {
    return (
      <div className="mt-5">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <p className="badge badge-info px-3 py-2">{this.state.user}</p>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              aria-label="Add new user..."
              aria-describedby="basic-addon2"
              onChange={this.descriptionHandler}
              value={this.state.description}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Duration..."
              aria-label="Add new user..."
              aria-describedby="basic-addon2"
              onChange={this.durationHandler}
              value={this.state.duration}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="date"
              className="form-control"
              placeholder="Add new user..."
              aria-label="Add new user..."
              aria-describedby="basic-addon2"
              onChange={this.dateHandler}
              value={this.state.date}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Exercise
          </button>
        </form>
      </div>
    );
  }
}

export default AddExercises;