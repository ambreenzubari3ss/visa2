"use client";

import Sidebar from "./sidebar/page";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { toggleSidebar } from "@/store/sidebarSlice";
import LeftIcon from "@/Assets/svgs/LeftIcon";
import Header from "./header/page";

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
        {/* {!isOpen && (
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
        )} */}
      </div>

      {/* Main Content Section */}
      <div className="flex-1 transition-all duration-300 ease-in-out pt-[7px] bg-white">
        <div
          className={`${
            isOpen ? "" : " m-[10px]"
          } bg-white h-[100vh]   border-l-[1px] border-t-[1px]  border-[#E9EAEA] rounded-tl-[30px]`}
        >
          <div className="border-b-[1px] border-[#E9EAEA]  px-[10px] flex items-center">
            {!isOpen && (
              <div
                className={`mr-[20px]`}
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
            <div className="w-full">
              <Header />
            </div>
          </div>
          <div className="px-[10px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
