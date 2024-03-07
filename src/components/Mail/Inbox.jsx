import React, { useContext, useEffect } from "react";
import { TiMail, TiExport, TiTrash } from "react-icons/ti";
import { FaStar, FaPaperclip, FaPlus, FaTrash } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import "./inbox.css";
import Header from "../UI/Header";
import InboxHeader from "./InboxHeader";
import InboxContent from "./InboxContent";
import { MailContext } from "../store/MailContextProvider";

function Inbox() {
  const { getMail } = useContext(MailContext);
  // Sample inbox data
  useEffect(() => {
    getMail();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <InboxHeader />
              <InboxContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
