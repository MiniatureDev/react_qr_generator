import React from "react";
import { QRCodeSVG } from "qrcode.react";

function QRCode({ data }) {
    const object = {
        "Name": data.name.toString(),
        "Email Address": data.email.toString(),
        "Phone Number": data.phoneNumber.toString(),
        "LinkedIn URL": data.linkedin.toString()
    }
    const dataString = JSON.stringify(object)
  return (
    <div>
      <QRCodeSVG
        value={dataString}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
    </div>
  );
}

export default QRCode;
