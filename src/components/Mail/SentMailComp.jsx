import React, { useContext } from "react";
import { FaStar, FaPaperclip } from "react-icons/fa";
import { MailContext } from "../store/MailContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const SentMailComp = () => {
  const navigate = useNavigate();
  const { sentMailData, deleteMail } = useContext(MailContext);

  const handleDeleteButton = (e, id) => {
    e.preventDefault();
    deleteMail(id);
  };
  return (
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade active show"
        id="inbox"
        aria-labelledby="inbox-tab"
        role="tabpanel"
      >
        <div>
          <div className="table-responsive">
            <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
              <tbody>
                {sentMailData.map((email) => (
                  <tr key={email._id} className={email.unread ? "unread" : ""}>
                    <td className="pl-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`cst${email._id}`}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={`cst${email._id}`}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td>
                      <FaStar className={email.unread ? "text-warning" : ""} />
                    </td>
                    <td>
                      <span className="mb-0 text-muted">
                        {email.senderMail}
                      </span>
                    </td>
                    <td>
                      <NavLink to={`/singlemail/${email._id}`} className="link">
                        <span
                          className={`badge badge-pill text-white font-medium badge-${
                            email.unread ? "danger" : "info"
                          } mr-2`}
                        >
                          {email.category}
                        </span>
                        <span className="text-dark">{email.subject}</span>
                      </NavLink>
                    </td>
                    <td>
                      <button onClick={(e) => handleDeleteButton(e, email._id)}>
                        <MdDelete />
                      </button>
                    </td>
                    <td className="text-muted">{email.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentMailComp;
