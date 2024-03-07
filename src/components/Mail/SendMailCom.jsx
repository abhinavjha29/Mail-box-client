import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { MailContext } from "../store/MailContextProvider";

const SendMailCom = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const { sendMail } = useContext(MailContext);
  const handleSendEmail = async () => {
    const today = new Date();
    const date = today.toISOString().split("T")[0];
    const contentState = editorState.getCurrentContent();
    const emailBody = JSON.stringify(convertToRaw(contentState));
    console.log("Recipient:", recipient);
    console.log("Subject:", subject);
    console.log("Body:", emailBody);
    const mail = { recipient, subject, emailBody, date };
    const resp = await sendMail(mail);
    if (resp) {
      return alert("Mail sent");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Compose Email</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="recipient" className="form-label">
              Recipient
            </label>
            <input
              type="email"
              className="form-control"
              id="recipient"
              placeholder="Enter email"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Body
            </label>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor form-control"
              onEditorStateChange={(newState) => setEditorState(newState)}
            />
          </div>

          <button className="btn btn-primary" onClick={handleSendEmail}>
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMailCom;
