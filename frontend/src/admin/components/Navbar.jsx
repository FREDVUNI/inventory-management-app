import React from "react";

const Navbar = ({
  onSidebarToggle,
  onSearchToggle,
  onDarkModeToggle,
  isSearchFormVisible,
}) => {
  return (
    <nav>
      <i className="bx bx-menu" onClick={onSidebarToggle}></i>
      <form className={isSearchFormVisible ? "show" : ""}>
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button className="search-btn" type="submit">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input
        type="checkbox"
        id="theme-toggle"
        hidden
        onChange={onDarkModeToggle}
      />
      <label htmlFor="theme-toggle" className="theme-toggle"></label>
      <a href="#" className="notif">
        <i className="bx bx-bell"></i>
        <span className="count">12</span>
      </a>
      <a href="#" className="profile">
        <img src="images/logo.png" alt="Profile" />
      </a>
    </nav>
  );
};

export default Navbar;
