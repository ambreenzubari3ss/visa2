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
import styles from "./sidebar.module.css";

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
      <aside className={`${styles.sidebar} ${!isOpen ? styles.sidebarClosed : styles.sidebarOpen}`}>
        <div className={styles.header}>
          <Image src={VisaLogo} alt="Visa Logo" width={89} height={53} />
          <div
            className={styles.toggleButton}
            onClick={() => dispatch(toggleSidebar())}
          >
            <LeftIcon />
          </div>
        </div>

        <div className={styles.content}>
          <ul className={styles.menuList}>
            <li>
              <div className={styles.menuHeader}>
                <span className={styles.menuTitle}>
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
                    className={`${styles.menuItem} ${
                      isActive ? styles.menuItemActive : styles.menuItemInactive
                    }`}
                  >
                    <div>
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={16}
                        height={16}
                        className={`${styles.menuIcon} ${isActive && styles.menuIconActive}`}
                      />
                    </div>
                    <span className={styles.menuText}>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {isOpen  && (
        <div
          className={styles.overlay}
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </>
  );
};

export default Sidebar;
