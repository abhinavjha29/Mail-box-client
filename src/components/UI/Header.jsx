import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MailContext } from "../store/MailContextProvider";

const Header = () => {
  const { getSentMail } = useContext(MailContext);
  const navigate = useNavigate();
  const handleSentButton = async (e) => {
    e.preventDefault();
    await getSentMail();
    navigate("/sentMailPage");
  };
  return (
    <header class="p-3 text">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="me-4">
              <NavLink to={"/inbox"}>
                <button
                  type="button"
                  class="btn btn-primary position-relative "
                >
                  Inbox
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </button>
              </NavLink>
            </li>
            <li className="me-4">
              <button
                onClick={(e) => handleSentButton(e)}
                className="nav-link px-2 text-dark"
              >
                Sent
              </button>
            </li>
            <li className="me-4">
              <a href="#" class="nav-link px-2 text-dark">
                Deleted
              </a>
            </li>
            <li className="me-4">
              <a href="#" class="nav-link px-2 text-dark">
                About
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="text-end">
            <NavLink to={"/sendmail"}>
              <button type="button" class="btn btn-outline-light me-2">
                Compose Mail
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
