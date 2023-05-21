import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const RightDevice = (props) => {
  const [spinner, setSpinner] = useState(false);
  const id = window.localStorage.getItem("token");
  function upload() {
    setSpinner(true);
    setpresent(false);
  }
  const [urls, seturls] = useState([]);
  const [present, setpresent] = useState([]);
  var list = [];
  var new_list = [];
  useEffect(() => {
    upload();
    fetch(`http://localhost:8000/user?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(`http://localhost:8000/user?id=${id}`);
        let uniqueItems = [...new Set(data)];
        seturls(uniqueItems);
        if (data[0] == null) {
          setpresent(true);
        }
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
      <div>{present && <h2 className="text-light">No Images To Show</h2>}</div>
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
