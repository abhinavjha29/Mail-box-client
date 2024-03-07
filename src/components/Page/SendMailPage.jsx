import React from "react";
import InboxHeader from "../Mail/InboxHeader";
import SendMailCom from "../Mail/SendMailCom";

const SendMailPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <InboxHeader />
              <SendMailCom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMailPage;
