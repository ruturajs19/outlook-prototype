import React, { useState } from "react";
import { connect } from "react-redux";
import { reduxActions } from "../../State/outlook.actions";
import { folders } from "../../State/outlook.reducer";
import "./SideBar.css";

const SideBar = (props) => {
  const [isAccordionOpen, setAccordionOpen] = useState(true);
  const { setCurrentFolder, currentFolder } = props;
  return (
    <div className="sidebar">
      <div className="subnavbar">
        <div className="sidebar-icon">
          <hr className="sidebar-icon-line" />
          <hr className="sidebar-icon-line" />
          <hr className="sidebar-icon-line" />
        </div>
        <button className="btn btn-primary new-message">New Message</button>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2
            className="accordion-header"
            id="headingOne"
            onClick={() => setAccordionOpen(!isAccordionOpen)}
          >
            <button
              className={`accordion-button ${!isAccordionOpen && "collapsed"} custom-accordion`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Folders
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${
              isAccordionOpen && "show"
            } custom-accordion`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="list-group">
                {Object.keys(folders).map((item, index) => (
                  <li
                    className={`list-group-item ${
                      currentFolder === folders[item] ? "active-tab":  "custom-accordion"
                    }`}
                    key={index}
                    onClick={() => setCurrentFolder(folders[item])}
                  >
                    {folders[item]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFolder: state.currentFolder,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentFolder: (value) =>
      dispatch({ type: reduxActions.updateCurrentFolder, value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
