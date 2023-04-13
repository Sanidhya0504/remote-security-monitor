import React from "react";
import "./left.pannel.css";
import { GiCctvCamera } from "react-icons/gi";
import { SiFiles } from "react-icons/si";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Pannel() {
  return (
    <div className="left--pannel d-flex align-items-center flex-column">
      <Link to="/user/dashboard">
        <GiCctvCamera className="icons" />
      </Link>
      <Link to="/user/dashboard/devices">
        <SiFiles className="icons" />
      </Link>

      <Link to="/user/dashboard/add">
        <BsPlusCircleFill className="icons" />
      </Link>
    </div>
  );
}

export default Pannel;
