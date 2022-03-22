import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark  text-light fixed-bottom">
      <div className="p-4 text-center">
        © WapBorhan. 2022 All rights reserved. Design By{" "}
        <i className="icon_heart"></i>{" "}
        <a style={{ textDecoration: "none" }} href="http://www.wapborhan.com">
          Borhan Uddin
        </a>
      </div>
    </footer>
  );
}
