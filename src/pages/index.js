import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import "../styles/index.css";

function Index() {
  return (
    <>
      <Helmet>
        <title>Deft.</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div id="page">
        <h1 id="maintitle">Dext.</h1>
        <div className="sub-text">
          THe future of No-code development. Coming April 2021
        </div>
      </div>
    </>
  );
}

export default Index;
