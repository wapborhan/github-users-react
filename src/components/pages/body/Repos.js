import React from "react";

export default function Repos() {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-6">
          <div className="repod">
            <a
              className="mb-6 text-uppercase text-decoration-none"
              href="${repo.html_url}"
              target="_blank"
            >
              repo.name
            </a>
            <p className="mt-2 mb-2">repo.description</p>
            <h6>
              Language: <span className="badge bg-info">repo.language</span>
            </h6>
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-primary p-2">
            Stars: repo.stargazers_count
          </span>
          <span className="badge bg-secondary p-2">
            Watchers: repo.watchers_count
          </span>
          <span className="badge bg-success p-2">Forks: repo.forks_count</span>
        </div>
      </div>
    </div>
  );
}
