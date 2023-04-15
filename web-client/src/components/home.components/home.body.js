import React from "react";
import phoneimg from "../../assets/phone.jpg";
import cloudimg from "../../assets/cloudstorage.jpg";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import "./home.body.css";
function HomeBody() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Fade top distance="20%">
          <img className="banner-image" src={phoneimg}></img>
          <div className="text-center p-3 body-text">
            <h2>Turn Your Old Phone Into A Security Camera</h2>
            <p>
              Aliqua ullamco esse enim ad incididunt incididunt dolor nulla
              adipisicing eiusmod sunt. Voluptate irure sunt ad officia id ut
              cupidatat. Duis nostrud cillum in veniam dolor in ullamco est
              officia tempor enim irure in occaecat.
            </p>
          </div>
        </Fade>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Fade bottom distance="20%">
          <div className="text-center p-3 body-text">
            <h2>Upto 5GB of Free Cloud Storage</h2>
            <p>
              Aliqua ullamco esse enim ad incididunt incididunt dolor nulla
              adipisicing eiusmod sunt. Voluptate irure sunt ad officia id ut
              cupidatat. Duis nostrud cillum in veniam dolor in ullamco est
              officia tempor enim irure in occaecat.
            </p>
          </div>
          <img className="banner-image" src={cloudimg}></img>
        </Fade>
      </div>
    </>
  );
}

export default HomeBody;
