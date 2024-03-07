import React from "react";
import Header from "../UI/Header";
import { useNavigate } from "react-router-dom";

const InboxHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      localStorage.clear();
      navigate("/");
    } catch (err) {}
  };
  return (
    <div>
      <div className="card-body bg-primary text-white mailbox-widget pb-0">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-white pb-3">Your Mailbox</h2>
          <div class="btn-group">
            <button type="button" class="btn btn-warning">
              Your Account
            </button>
            <button
              type="button"
              class="btn btn-warning dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  onClick={(e) => {
                    handleLogout(e);
                  }}
                >
                  Logout
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  User Detail
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Header />
      </div>
    </div>
  );
};

export default InboxHeader;
