"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import VisaLogo from "../../../Assets/Images/LoginLogo.png";
import DashboardIcon from "./../../../Assets/icons/fi-sr-apps.svg";
import UsersIcon from "./../../../Assets/icons/fi-sr-user.svg";
import CustomersIcon from "./../../../Assets/icons/fi-sr-customers.svg";
import ApplicationsIcon from "./../../../Assets/icons/fi-sr-application.svg";
import SettingsIcon from "./../../../Assets/icons/fi-sr-settings.svg";
import FormsIcon from "./../../../Assets/icons/fi-sr-forms.svg";
import KanbanIcon from "./../../../Assets/icons/fi-sr-layers.svg";
import StatsIcon from "./../../../Assets/icons/fi-sr-stats.svg";
import RefundIcon from "./../../../Assets/icons/fi-sr-ticket.svg";
import LeftIcon from "./../../../Assets/icons/fi-rr-caret-left.svg";
import "./../../globals.css";
import './styles.modules.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { name: "Dashboard", icon: DashboardIcon, isActive: false },
    { name: "Manage Users", icon: UsersIcon, isActive: false },
    { name: "Customers List", icon: CustomersIcon, isActive: false },
    { name: "Applications List", icon: ApplicationsIcon, isActive: false },
    { name: "Settings", icon: SettingsIcon, isActive: true },
    { name: "Visa Forms", icon: FormsIcon, isActive: false },
    { name: "Kanban Board", icon: KanbanIcon, isActive: true },
    { name: "Analytics", icon: StatsIcon, isActive: false },
    { name: "Refunds Requests", icon: RefundIcon, isActive: false },
  ];
  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <Image src={LeftIcon} alt="Open Sidebar" width={89} height={53} />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gray-50 dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="p-4 flex justify-between items-center">
          <Image src={VisaLogo} alt="Visa Logo" width={89} height={53} />
          <div
            className="flex justify-center action-icon size-[32px] cursor-pointer"
            onClick={toggleSidebar}
          >
            <Image src={LeftIcon} alt="Close Sidebar" width={16} height={16} />
          </div>
        </div>
        <hr />
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-color-light text-[12px] font-[600]">
                  MAIN MENU
                </span>
              </a>
            </li>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center p-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    item.isActive ? "active" : "text-color-light"
                  }`}
                >
                  <Image
                    className={`${
                      item.isActive ? "!fill-[#42DA82]" : "text-color-light"
                    }`}
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                  />
                  <span
                    className={`flex-1 ms-3 whitespace-nowrap text-[14px] font-[600] ${
                      item.isActive ? "color-primary" : "text-color-light"
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

    </>
  )
}

export default Sidebar