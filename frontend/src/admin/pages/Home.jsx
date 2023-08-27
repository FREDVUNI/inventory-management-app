import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import MainContent from "./components/MainContent";

const HomePage = () => {
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);

  const handleSidebarToggle = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  const handleSearchToggle = () => {
    setIsSearchFormVisible(!isSearchFormVisible);
  };

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : ""}`}>
      <Sidebar isClosed={isSidebarClosed} />
      <div className="content">
        <Navbar
          onSidebarToggle={handleSidebarToggle}
          onSearchToggle={handleSearchToggle}
          isSearchFormVisible={isSearchFormVisible}
          onDarkModeToggle={handleDarkModeToggle}
        />
        <MainContent isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default HomePage;
