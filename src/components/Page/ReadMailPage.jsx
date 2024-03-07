import React from "react";
import InboxHeader from "../Mail/InboxHeader";
import ReadSingleMail from "../Mail/ReadSingleMail";

const ReadMailPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <InboxHeader />
              <ReadSingleMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMailPage;
