import React, { useEffect, useState } from "react";
import MailBody from "../MailBody/MailBody";
import MailList from "../MailList/MailList";
import { connect } from 'react-redux';
import "./Content.css";
import { reduxActions } from "../../State/outlook.actions";
import { folders } from "../../State/outlook.reducer";

const ContentBody = (props) => {
  const { getMails, currentFolder, deleteMail } = props;
  const [currentBody, setCurrentBody] = useState({});
  useEffect(() => {
    setCurrentBody({});
    getMails(currentFolder);
  },[getMails, currentFolder])
  const currentData = props[Object.keys(folders).find(key => folders[key] === currentFolder)];
  return (
    <div className="content-body">
        <div className="header"></div>
    <div className="mail-items">
        <MailList data={currentData} setCurrentBody={setCurrentBody} deleteMail={deleteMail}/>
        <MailBody currentBody={currentBody}/>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return{
    inbox: state.inbox,
    spam: state.spam,
    deleted: state.deleted,
    custom: state.custom,
    currentFolder: state.currentFolder
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    getMails: (currentFolder) => dispatch({type: reduxActions.getFolders, currentFolder}),
    deleteMail: (index) => dispatch({type: reduxActions.deleteMail, index})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);
