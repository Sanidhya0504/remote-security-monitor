import React from "react";
import "./left.pannel.css";
// import { GiCctvCamera } from "react-icons/gi";
// import { SiFiles } from "react-icons/si";
// import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faPhotoFilm,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

function Pannel() {
  return (
    <div className="left--pannel d-flex align-items-center flex-column">
      <Link to="/user/dashboard">
        <FontAwesomeIcon className="icons" icon={faVideo} />
      </Link>
      <Link to="/user/dashboard/devices">
        <FontAwesomeIcon className="icons" icon={faPhotoFilm} />
      </Link>

      <Link to="/user/dashboard/add">
        <FontAwesomeIcon className="icons" icon={faCirclePlus} />
      </Link>
    </div>
  );
}

export default Pannel;
