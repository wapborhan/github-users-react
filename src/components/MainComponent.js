import React, { Fragment } from "react";
import Body from "./pages/body/Body";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";

export default function MainComponent() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}
