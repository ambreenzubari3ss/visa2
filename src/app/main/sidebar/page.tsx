"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSidebar, setSidebarOpen } from "@/store/sidebarSlice";
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
import "./../../globals.css";
import { usePathname } from "next/navigation";
import LeftIcon from "@/Assets/svgs/LeftIcon";

const menuItems = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    path: "/main/dashboard",
  },
  {
    name: "Manage Users",
    icon: UsersIcon,
    path: "/main/users",
  },
  {
    name: "Customers List",
    icon: CustomersIcon,
    path: "/main/customers",
  },
  {
    name: "Applications List",
    icon: ApplicationsIcon,
    path: "/main/applications",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    path: "/main/settings",
  },
  { name: "Visa Forms", icon: FormsIcon, path: "/main/forms" },
  {
    name: "Kanban Board",
    icon: KanbanIcon,
    path: "/main/kanban",
  },
  {
    name: "Analytics",
    icon: StatsIcon,
    path: "/main/analytics",
  },
  {
    name: "Refunds Requests",
    icon: RefundIcon,
    path: "/main/refunds",
  },
];

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.sidebar);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setSidebarOpen(window.innerWidth >= 768));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white transform transition-transform duration-300 ease-in-out ${
          !isOpen ? "-translate-x-full" : "translate-x-0"
        } w-64 z-40`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <Image src={VisaLogo} alt="Visa Logo" width={89} height={53} />
          <div
            className="cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          >
            <LeftIcon />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-80px)]">
          <ul className="space-y-2 p-4">
            <li>
              <div className="px-2 py-4">
                <span className="text-color-light text-[12px] font-[600]">
                  MAIN MENU
                </span>
              </div>
            </li>

            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#42DA82]/10 text-[#42DA82]"
                        : "text-[#64748B] hover:bg-gray-50 hover:text-[#42DA82]"
                    }`}
                  >
                    <div
                      className={`${
                        isActive ? "text-[#42DA82] " : " hover:text-[#42DA82]"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={16}
                        height={16}
                        className={`${isActive ? "" : ""}`}
                      />
                    </div>
                    <span className="ml-3 text-sm font-medium">
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </>
  );
};

export default Sidebar;
