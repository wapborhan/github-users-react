import React from "react";

export default function BackToTop() {
  return (
    <div className="backtotop">
      <button
        type="button"
        className="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
