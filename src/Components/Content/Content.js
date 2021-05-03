import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Content.css";
import ContentBody from "./ContentBody";

const Content = (props) => {
  return (
    <div className="content">
      <div className="content-sidebar">
        <SideBar />
      </div>
      <div className="content-body-container">
        <ContentBody/>
      </div>
    </div>
  );
};

export default Content;
