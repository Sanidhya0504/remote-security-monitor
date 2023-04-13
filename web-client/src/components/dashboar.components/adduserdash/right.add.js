import React from "react";
import "./right.add.css";
import qr from "../../../assets/qr1.png";
function RightAdd() {
  return (
    <div className="right--pannel d-flex justify-content-center align-items-center flex-column">
      <img className="qr-code" src={qr}></img>
      <h1 className="text-light">Scan this QR to register a Device.</h1>
    </div>
  );
}

export default RightAdd;
