import React from "react";
import { useState, useEffect } from "react";

const User = () => {
  const [urls, seturls] = useState([]);
  var list = [];
  var new_list = [];
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seturls(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {/* {list.map((url) => {
        <h6>hello</h6>;
        // <img src={url} />
      })} */}
      {urls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default User;
