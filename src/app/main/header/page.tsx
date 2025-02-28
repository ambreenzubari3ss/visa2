"use client";
import React, { useState } from "react";
import "./styles.modules.css";
import "./../../globals.css";
import BellSvg from "@/Assets/svgs/BellSvg";
import FlagSvg from "@/Assets/svgs/FlagSvg";
import PlusSvg from "@/Assets/svgs/PlusSvg";
import DropdownSVG from "@/Assets/svgs/DropdownSVG";
import ProfileImage from "../../../Assets/Images/generic-profile.png";
import Image from "next/image";
import SearchSvg from "@/Assets/svgs/SearchSvg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="header-content">
        {/* Search Input */}
        <div className="search-container">
          <div className="search-icon">
            <SearchSvg />
          </div>
          <input type="text" className="input-search" placeholder="Search..." />
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Notification and Icons */}
          <div className="icons-group">
            <div className="relative">
              <BellSvg />
              <div className="Notification">
                <span className="NotifactionNm">99</span>
              </div>
            </div>
            <FlagSvg />
            <div className="plus-icon">
              <PlusSvg />
            </div>
            <div className="divider hidden sm:block"></div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <div className="profile-section" onClick={() => setIsOpen(!isOpen)}>
              <div className="profile-image">
                <Image src={ProfileImage} alt="Profile" />
              </div>
              <div className="profile-info hidden sm:block">
                <p className="profile-name">John Will Palinsky</p>
                <p className="profile-role">Manager</p>
              </div>
              <DropdownSVG />
            </div>

            {isOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li className="dropdown-item">Profile</li>
                  <li className="dropdown-item">Settings</li>
                  <li className="dropdown-item">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
