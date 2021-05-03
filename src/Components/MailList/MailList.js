import React from "react";
import "./MailList.css";

const MailList = (props) => {
  const { data, setCurrentBody, deleteMail } = props;

  return (
    <div className="mail-list">
      {data?.map((item, index) => (
        <div
          className="mail-list-item"
          key={index}
          onClick={() => {
            setCurrentBody(item);
          }}
        >
          <div>
            <b>{item.mId}</b>{" "}
            <img
              src={require("../../Assets/Images/delete.png")}
              alt="delete"
              width="20px"
              height="20px"
              style={{ float: "right" }}
              onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                deleteMail(index);
              }}
            />
          </div>
          <div>
            <b className="mail-list-subject">{item.subject}</b>
          </div>
          <div>
            <span
              id={`mail-list-${index}-content`}
              className="mail-list-content"
            >
              {item.content}
            </span>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MailList;
