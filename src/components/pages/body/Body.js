import React, { Component } from "react";
import Profile from "./Profile";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profile: null,
      repos: null,
    };
  }

  updateInput = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value,
    });
  };

  //Form Submit
  searchUser = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <main>
        <div className="container searchContainer">
          <div className="search card card-body">
            <div className="row">
              <div className="col-lg-6">
                <h1>Search Github User's</h1>
              </div>
              <div className="col-lg-6">
                <form className="form-inline" onSubmit={this.searchUser}>
                  <input
                    onChange={this.updateInput}
                    value={this.state.username}
                    type="text"
                    className="form-control"
                    id="searchUser"
                    placeholder="Github Username....."
                  />
                  <input
                    type="submit"
                    id="searchBtn"
                    className="btn btn-success"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>

          <div id="profile">
            <Profile />
          </div>
        </div>
      </main>
    );
  }
}
