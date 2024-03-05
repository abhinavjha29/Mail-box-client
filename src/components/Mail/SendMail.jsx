import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const SendMail = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const emailBody = JSON.stringify(rawContentState);

    // Add your logic to send email with emailBody
    console.log("Email Body:", emailBody);

    // Reset editor state after sending email
    // setEditorState(EditorState.createEmpty());
  };

  return (
    <div className="container mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Compose Email</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="emailRecipient">
              <Form.Label>To:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter recipient email"
                required
              />
            </Form.Group>
            <Form.Group controlId="emailSubject">
              <Form.Label>Subject:</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" required />
            </Form.Group>
            <Form.Group controlId="emailBody">
              <Form.Label>Body:</Form.Label>
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                toolbar={{
                  options: ["inline", "list", "link", "emoji", "image"],
                  inline: { options: ["bold", "italic", "underline"] },
                  image: { uploadEnabled: true, uploadCallback: () => {} }, // Add your image upload logic here
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Email
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SendMail;
