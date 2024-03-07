import React from "react";
import Inbox from "../Mail/Inbox";
import InboxHeader from "../Mail/InboxHeader";
import SentMailComp from "../Mail/SentMailComp";

const SentMailPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <InboxHeader />
              <SentMailComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentMailPage;
