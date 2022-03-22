import React, { Component } from "react";
import Profile from "./Profile";

export default class Body extends Component {
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
                <input
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
