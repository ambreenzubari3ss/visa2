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
    <div className="pt-2 px-4">
      <div className="flex items-center justify-between py-[13px] w-full flex-wrap">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[200px] max-w-[400px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchSvg />
          </div>
          <input
            type="text"
            className="input-search text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 border dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search..."
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-5 mt-3 sm:mt-0">
          {/* Notification and Icons */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <BellSvg />
              <div className="Notification">
                <span className="NotifactionNm">99</span>
              </div>
            </div>
            <FlagSvg />
            <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#42DA82] rounded-[10px]">
              <PlusSvg />
            </div>
            <div className="h-[32px] border border-[#E9EAEA] hidden sm:block"></div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-[32px] h-[32px] rounded-full overflow-hidden border border-gray-300">
                <Image
                  src={ProfileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-[14px] font-bold highlight-color">
                  John Will Palinsky
                </p>
                <p className="text-[12px] font-medium text-gray-500">
                  Manager
                </p>
              </div>
              <DropdownSVG />
            </div>

            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                <ul className="py-2">
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
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
