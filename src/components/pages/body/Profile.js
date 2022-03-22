import React from "react";
import Repos from "./Repos";

export default function Profile() {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-lg-3">
          <div className="sticky-top">
            <img
              src="${user.avatar_url}"
              className="img-fluid rounded"
              alt=""
            />
            <div className="text-center">
              <h1>user.name</h1>
              <p>user.login</p>
              <p>user.bio</p>
            </div>
            <a
              href="${user.html_url}"
              className="btn btn-primary btn-block mt-3 mb-3 w-100"
            >
              View Profile
            </a>
            <span className="badge bg-success">Followers: user.followers</span>
            <span className="badge bg-warning">Following: user.following</span>
            <ul className="text-left mt-4 mb-2 p-0">
              <li className="list-group-item">Company: user.company</li>
              <li className="list-group-item">
                Website:
                <a className="text-decoration-none" href="http://${user.blog}">
                  user.blog
                </a>
              </li>
              <li className="list-group-item">
                Twitter:
                <a
                  className="text-decoration-none"
                  href="http://www.twitter.com/${user.twitter_username}"
                >
                  user.twitter_username
                </a>
              </li>
              <li className="list-group-item">Address: user.location</li>
              <li className="list-group-item">Member Since: user.created_at</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <span className="badge bg-primary">
            Public Repos: user.public_repos
          </span>
          <span className="badge bg-info">Public Gists: user.public_gists</span>

          <div id="repos">
            <Repos />
          </div>
        </div>
      </div>
    </div>
  );
}
