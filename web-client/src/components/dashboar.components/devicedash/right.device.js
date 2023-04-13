import React from "react";
import { useState, useEffect } from "react";

const RightDevice = () => {
  const [urls, seturls] = useState([]);
  var list = [];
  var new_list = [];
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let uniqueItems = [...new Set(data)];
        seturls(uniqueItems);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="right--pannel d-flex justify-content-center align-items-center flex-column">
      <div>
        {urls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default RightDevice;
