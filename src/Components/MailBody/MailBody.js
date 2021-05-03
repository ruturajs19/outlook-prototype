import React from "react";
import "./MailBody.css";

const MailBody = (props) => {
  const {currentBody} = props;
  if(currentBody.content){
    document.getElementById("body-p").innerHTML = currentBody.content;
  }
  return (
    <div className="mail-body">
        <h1>{currentBody.subject}</h1>
        <p id="body-p"></p>
    </div>
  );
};

export default MailBody;
