import React from "react";
import "./middle.device.css";
import { Button } from "react-bootstrap";

function MiddleDevice() {
  return (
    <div className="middle--add text-light d-flex justify-content-center text-center">
      <div className="h-10 w-100">
        <Button variant="dark" className="w-100">
          Device1
        </Button>
      </div>
    </div>
  );
}

export default MiddleDevice;
