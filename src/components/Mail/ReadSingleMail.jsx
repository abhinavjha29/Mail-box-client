import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { MailContext } from "../store/MailContextProvider";
import { useParams } from "react-router-dom";

const ReadSingleMail = () => {
  const { singleMail, getSingleMail } = useContext(MailContext);
  const [editorState, setEditorState] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await getSingleMail(id);

      const contentState = convertFromRaw(JSON.parse(singleMail.body));
      const state = EditorState.createWithContent(contentState);
      setEditorState(state);
    };

    fetchData();
  }, [singleMail]);

  if (!singleMail || !editorState) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">Read Email</div>
        <div className="card-body">
          <h5 className="card-title">Subject: {singleMail.subject}</h5>
          <div className="card-text">
            <p>
              <strong>From:</strong> {singleMail.senderMail}
            </p>
            <p>
              <strong> date :</strong>
              {singleMail.date}
            </p>
            <br />
            <Editor editorState={editorState} readOnly={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleMail;
