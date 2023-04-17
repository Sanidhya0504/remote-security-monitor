import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const RightDevice = () => {
  const [spinner, setSpinner] = useState(false);

  function upload() {
    setSpinner(true);
  }
  const [urls, seturls] = useState([]);
  var list = [];
  var new_list = [];
  useEffect(() => {
    upload();
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        seturls(data);
        setSpinner(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="right--pannel d-flex justify-content-center align-items-center flex-column">
      <div className="d-flex justify-content-center align-items-center">
        <div>{spinner && <Spinner animation="grow" variant="dark" />}</div>
        <br></br>
        <div>{spinner && <Spinner animation="grow" variant="light" />}</div>
        <br></br>
        <div>{spinner && <Spinner animation="grow" variant="dark" />}</div>
      </div>
      <div>
        {urls.map((url, index) => (
          <img
            style={{ width: 100 }}
            key={index}
            src={url}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RightDevice;
