import React from "react";
import { TiMail, TiExport, TiTrash } from "react-icons/ti";
import { FaStar, FaPaperclip, FaPlus, FaTrash } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import "./inbox.css";
import Header from "../UI/Header";

function Inbox() {
  // Sample inbox data
  const inboxData = [
    {
      id: 1,
      sender: "Hritik Roshan",
      subject: "Lorem ipsum perspiciatis",
      category: "Work",
      date: "May 13",
      unread: true,
    },
    {
      id: 2,
      sender: "Genelia Roshan",
      subject: "Inquiry about license for Admin",
      category: "Business",
      date: "May 13",
      unread: false,
    },
    {
      id: 3,
      sender: "Ritesh Deshmukh",
      subject: "Bitbucket (commit Pushed) by Ritesh",
      category: "Friend",
      date: "May 13",
      unread: true,
    },
    // Add more sample data as needed
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body bg-primary text-white mailbox-widget pb-0">
                <h2 className="text-white pb-3">Your Mailbox</h2>
                <Header />
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="inbox"
                  aria-labelledby="inbox-tab"
                  role="tabpanel"
                >
                  <div>
                    <div className="row p-4 no-gutters align-items-center">
                      <div className="col-sm-12 col-md-6">
                        <h3 className="font-light mb-0">
                          <i className="ti-email mr-2"></i>350 Unread emails
                        </h3>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <ul className="list-inline dl mb-0 float-left float-md-right">
                          <li className="list-inline-item text-info mr-3">
                            <a href="#/">
                              <button className="btn btn-circle btn-success text-white">
                                <FaPlus />
                              </button>
                              <span className="ml-2 font-normal text-dark">
                                Compose
                              </span>
                            </a>
                          </li>
                          <li className="list-inline-item text-danger">
                            <a href="#/">
                              <button className="btn btn-circle btn-danger text-white">
                                <FaTrash />
                              </button>
                              <span className="ml-2 font-normal text-dark">
                                Delete
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                        <tbody>
                          {inboxData.map((email) => (
                            <tr
                              key={email.id}
                              className={email.unread ? "unread" : ""}
                            >
                              <td className="pl-3">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id={`cst${email.id}`}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={`cst${email.id}`}
                                  >
                                    &nbsp;
                                  </label>
                                </div>
                              </td>
                              <td>
                                <FaStar
                                  className={email.unread ? "text-warning" : ""}
                                />
                              </td>
                              <td>
                                <span className="mb-0 text-muted">
                                  {email.sender}
                                </span>
                              </td>
                              <td>
                                <a className="link">
                                  <span
                                    className={`badge badge-pill text-white font-medium badge-${
                                      email.unread ? "danger" : "info"
                                    } mr-2`}
                                  >
                                    {email.category}
                                  </span>
                                  <span className="text-dark">
                                    {email.subject}
                                  </span>
                                </a>
                              </td>
                              <td>
                                <FaPaperclip className="text-muted" />
                              </td>
                              <td className="text-muted">{email.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Add content for other tabs (Sent, Spam, Deleted) */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
