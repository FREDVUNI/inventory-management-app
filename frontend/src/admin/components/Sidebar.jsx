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
          <Link to="/">
            <i className="bx bxs-dashboard"></i>Dashboard
          </Link>
        </li>
        <li className="active">
          <Link to="/products">
            <i className="bx bx-analyse"></i>Products
          </Link>
        </li>
        <li>
          <Link to="/categories">
            <i className="bx bx-message-square-dots"></i>Categories
          </Link>
        </li>
        <li>
          <Link to="/users">
            <i className="bx bx-group"></i>Users
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="bx bx-cog"></i>Settings
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/logout" className="logout">
            <i className="bx bx-log-out-circle"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
