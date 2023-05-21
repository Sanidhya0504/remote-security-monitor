import React from "react";
import QRCode from "qrcode.react";

const QRGenerator = (props) => {
  return (
    <div>
      <QRCode value={props.qrString} />
    </div>
  );
};

export default QRGenerator;
