// import React from "react";
// import Pannel from "./left.pannel";
import Middle from "./homedash/middle.pannel";
import RightPannel from "./homedash/right.pannel";
import "./dashboard.home.css";
function HomeDash() {
  return (
    <div className="d-flex dash--home">
      <Middle />
      <RightPannel />
    </div>
  );
}

export default HomeDash;
