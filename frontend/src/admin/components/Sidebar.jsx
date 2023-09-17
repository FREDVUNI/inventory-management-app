import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isClosed }) => {
  return (
    <div className={`sidebar ${isClosed ? "close" : ""}`}>
      <Link to="/" className="logo">
        <i className="bx bx-code-alt"></i>
        <div className="logo-name">
          <span>Inventory</span>
        </div>
      </Link>
      <ul className="side-menu">
        <li>
          <a href="/">
            <i className="bx bxs-dashboard"></i>Dashboard
          </a>
        </li>
        <li className="active">
          <a href="/products">
            <i className="bx bx-analyse"></i>Products
          </a>
        </li>
        <li>
          <a href="/categories">
            <i className="bx bx-message-square-dots"></i>Categories
          </a>
        </li>
        <li>
          <a href="/users">
            <i className="bx bx-group"></i>Users
          </a>
        </li>
        <li>
          <a href="/settings">
            <i className="bx bx-cog"></i>Settings
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="/logout" className="logout">
            <i className="bx bx-log-out-circle"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
