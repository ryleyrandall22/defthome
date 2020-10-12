import React from "react";
import { Helmet } from "react-helmet";

import "../styles/index.css";

function Index() {
  return (
    <>
      <Helmet>
        <title>Dext.</title>
        <link rel="icon" type="image/png" href="/static/favicon.ico" sizes="16x16" />
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
