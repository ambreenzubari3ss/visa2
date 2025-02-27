"use client";

import Sidebar from "./sidebar/page";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { toggleSidebar } from "@/store/sidebarSlice";
import LeftIcon from "@/Assets/svgs/LeftIcon";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Section */}
      <div className="relative">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "w-64" : "w-0"
          }`}
        >
          <Sidebar />
        </div>

        {/* Fixed Position Toggle Button */}
        {!isOpen && (
          <div
            className={`absolute top-4 ${
              isOpen ? "right-4" : "left-4"
            } cursor-pointer z-50`}
            onClick={() => dispatch(toggleSidebar())}
          >
            <div
              className={`transition-transform duration-300 ${
                isOpen ? "" : "rotate-180"
              }`}
            >
              <LeftIcon />
            </div>
          </div>
        )}
      </div>

      {/* Main Content Section */}
      <div className="flex-1 transition-all duration-300 ease-in-out">
        <div className={`${isOpen ? "px-1" : "px-16 pr-[10px] pt-[15px]"} `}>
          {children}
        </div>
      </div>
    </div>
  );
}
