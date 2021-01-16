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
    axios
      .get("http://localhost:5000/users")
      .then((result) => this.setState({ users: result.data }))
      .catch((err) => console.log(err.message));
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
      .post("http://localhost:5000/exercises/add", exercise)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));

    this.setState({
      user: "",
      date: "",
      duration: "",
      description: "",
    });
  };
  render() {
    return (
      <div className="mt-5">
        <form onSubmit={this.onSubmit}>
          <div className="input-group mb-3">
            <select
              onChange={this.userHandler}
              name="cars"
              id="cars"
              className="btn btn-info"
            >
              {this.state.users.map((user) => (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
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
            Create Exercise
          </button>
        </form>
      </div>
    );
  }
}

export default AddExercises;
